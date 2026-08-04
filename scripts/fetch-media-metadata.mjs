#!/usr/bin/env node
// Populates title/thumbnail for NEWS_ARTICLES entries in src/data.ts by
// scraping each article's og:title / og:image at author time. Run this
// after adding a new { url } entry — the site itself makes no runtime
// network calls for this, so page loads never hit an external API's daily limit.
//
// Usage: node scripts/fetch-media-metadata.mjs

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, '..', 'src', 'data.ts')
let source = readFileSync(dataPath, 'utf8')

const arrayMatch = source.match(/export const NEWS_ARTICLES: NewsArticle\[\] = \[([\s\S]*?)\n\];/)
if (!arrayMatch) throw new Error('Could not find NEWS_ARTICLES array in data.ts')

const entryRe = /\{\s*url:\s*"((?:[^"\\]|\\.)*)"(?:,\s*title:\s*"((?:[^"\\]|\\.)*)")?(?:,\s*thumbnail:\s*"((?:[^"\\]|\\.)*)")?\s*\}/g

function extractMeta(html, property) {
  const re = new RegExp(`<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`, 'i')
  const re2 = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${property}["']`, 'i')
  return html.match(re)?.[1] ?? html.match(re2)?.[1] ?? null
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

async function fetchMeta(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DNCBot/1.0)' },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const html = await res.text()
  const title = extractMeta(html, 'og:title') ?? html.match(/<title>([^<]+)<\/title>/i)?.[1]
  const image = extractMeta(html, 'og:image') ?? extractMeta(html, 'twitter:image')
  return {
    title: title ? decodeEntities(title.trim()) : undefined,
    thumbnail: image ? decodeEntities(image.trim()) : undefined,
  }
}

function escape(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, ' ').trim()
}

// Skip commented-out entries (line starts with //) so we never touch them.
const lines = arrayMatch[1].split('\n')
const entries = []
for (const line of lines) {
  if (line.trim().startsWith('//')) continue
  const m = entryRe.exec(line)
  entryRe.lastIndex = 0
  if (!m) continue
  entries.push({ raw: m[0], url: m[1], title: m[2], thumbnail: m[3] })
}

let changed = false
for (const entry of entries) {
  if (entry.title && entry.thumbnail) continue
  try {
    const meta = await fetchMeta(entry.url)
    const title = meta.title ?? entry.title
    const thumbnail = meta.thumbnail ?? entry.thumbnail
    let replacement = `{ url: "${entry.url}"`
    if (title) replacement += `, title: "${escape(title)}"`
    if (thumbnail) replacement += `, thumbnail: "${escape(thumbnail)}"`
    replacement += ' }'
    source = source.replace(entry.raw, replacement)
    changed = true
    console.log(`✓ ${entry.url} — ${title ?? '(no title)'}`)
  } catch (err) {
    console.warn(`✗ ${entry.url} — ${err.message}`)
  }
}

if (!changed) {
  console.log('Nothing to fetch — all entries already have title + thumbnail.')
} else {
  writeFileSync(dataPath, source)
  console.log(`\nUpdated ${dataPath}`)
}

// A single article fetch failing (dead link, bot-blocked site) must never
// block the dev/build script chain.
process.exitCode = 0
