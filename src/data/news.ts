export interface NewsArticle {
  url: string;
  title?: string;
  thumbnail?: string;
}

// After adding a new { url } entry, run `node scripts/fetch-media-metadata.mjs`
// to auto-fill title/thumbnail from each article's og:title / og:image
// (scraped once, not at runtime, so page loads never hit an external API's daily limit).
export const NEWS_ARTICLES: NewsArticle[] = [
  { url: "https://ictsamachar.com/news/digital-nepal-conclave-2025-concludes/", title: "डिजिटल नेपाल कन्क्लेभ: गगन थापादेखि सञ्चार, अर्थमन्त्रीसहित प्रधानमन्त्रीसम्मले गरे डिजिटल रुपान्तरणका कुरा", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/DNC_2025_1_8m9mQOSVGk_piZaHCW1mM.jpg" },
  { url: "https://www.nepalbahas.com/story/693941/2025/8/15/science-and-technology/the--digital-nepal-conqualive-2025--for-the/", title: "नीति सुधार र निजी क्षेत्रको सहभागिता प्रवर्द्धनका लागि ‘डिजिटल नेपाल कन्क्लेभ २०२५’", thumbnail: "https://www.nepalbahas.com/_next/image?url=https%3A%2F%2Fcdn.luminocdn.net%2Falbums%2Fdigital_Ydbplh9OOx_vgNwkuAxNW.jpeg&w=1200&q=75" },
  { url: "https://www.goodnepal.com/detail/92", title: "डिजिटल नेपाल कन्क्लेभमा प्रधानमन्त्रीदेखि गगन थापासम्मले गरे डिजिटल रुपान्तरणका कुरा", thumbnail: "https://www.goodnepal.com/uploads/posts/DNC-2025-(1)-1755441873.jpg" },
  { url: "https://hamrakura.com/news-details/196303/2025-08-17", title: "डिजिटल नेपाल कन्क्लेभमा केपी ओलीदेखि गगन थापाले गरे डिजिटल रूपान्तरणका कुरा", thumbnail: "https://hamrakura.com/uploads/news/images/gagan-thapa-digital-nepal-c.jpg" },
  { url: "https://ictsamachar.com/news/the-fourth-edition-of-digital-nepal-conclave-has-begun/", title: "सुरू भयो चौंथो संस्करणको डिजिटल नेपाल कन्क्लेभ, डिजिटल इकोसिस्टम र रूपान्तरणका विषयमा छलफल हुँदै", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/PM_O7nxlcy3s3_ideefuXw5C.jpg" },
  { url: "https://english.pardafas.com/digital-nepal-conclave-2025-highlights-policy-reform-and-private-sector-engagement/", title: "‘Digital Nepal Conclave 2025’ Highlights Policy Reform and Private Sector Engagement", thumbnail: "https://english.pardafas.com/wp-content/uploads/2025/08/Conclave-1024x576.jpg" },
  { url: "https://ictsamachar.com/news/digital-transformation-should-be-in-the-interest-of-citizens-and-society-dr-shrestha/", title: "डिजिटल रूपान्तरण नागरिक र समाजको हितमा हुनुपर्छः डा. श्रेष्ठ", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/Dr_Shrestha_dvcu9wo6RR_dLNyqn3Yy2.jpg" },
  { url: "https://ictsamachar.com/news/digitalization-cannot-be-achieved-by-typing-on-a-computer-there-must-be-interoperability-between-systems/", title: "‘कम्प्युटरमा टाइप गरेर डिजिटलाइजेनस हुँदैन, प्रणालीहरूबीच अन्तरआवद्धता हुनुपर्छ’", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/Ek_narayan_aryal_GqWKEzkGyP_JZ0hmrGcF7.jpg" },
  { url: "https://ictsamachar.com/news/google-launches-street-view-service-in-nepal/", title: "गूगलले नेपालमा सुरू गर्‍यो स्ट्रिट भ्यु सेवा, भर्चुअल रूपमा अब सुन्दर दृश्य र संस्कृति अवलोकन गर्न सकिने", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/Capture_wLD5kD9lPK_P9I31SZjKY.PNG" },
  { url: "https://www.nepalpress.com/2025/08/15/628440/", title: "एआईको प्रयोग गरेर केहीले नियतवश निराशा फैलाउन खोज्दैछन् : प्रधानमन्त्री", thumbnail: "https://www.nepalpress.com/wp-content/uploads/2025/08/kp-oli-3-e1755240001447.png" },
  { url: "https://technologykhabar.com/2025/08/15/211684/", title: "नीति सुधार र निजी क्षेत्रको सहभागिता प्रवर्द्धनका लागि ‘डिजिटल नेपाल कन्क्लेभ २०२५’ - Technology Khabar", thumbnail: "https://www.technologykhabar.com/wp-content/uploads/2025/08/Digital-Nepal-Conclave-1.jpg" },
  { url: "https://www.capitalnepal.com/detail/65434", title: "डिजिटल नेपाल कन्क्लेभः प्रधानमन्त्रीले भने– सामाजिक सन्जाल कानुनी दायरामा आउनैपर्छ", thumbnail: "https://www.capitalnepal.com/uploads/posts/pm-1755244266.jpg" },
  { url: "https://ictsamachar.com/news/nepal-can-become-a-digital-work-center-prime-minister-oli/", title: "नेपाल ‘डिजिटल वर्क सेन्टर’ बन्न सक्छः प्रधानमन्त्री ओली", thumbnail: "https://ictsamacharcdn.prixacdn.net/media/albums/PM_Oli_1_Xs1V1ENlL2_ohmeoUPoeh.jpg" },
  // { url: "https://www.onlinekhabar.com/2025/08/1743526/transformation-is-not-possible-without-digitalization-chief-secretary-aryal" },
  { url: "https://nepalpress.com/2025/08/15/628440/", title: "एआईको प्रयोग गरेर केहीले नियतवश निराशा फैलाउन खोज्दैछन् : प्रधानमन्त्री", thumbnail: "https://nepalpress.com/wp-content/uploads/2025/08/kp-oli-3-e1755240001447.png" },
  { url: "https://www.instagram.com/reel/DNXwPtIxKw_/", title: "Himalaya Television on Instagram", thumbnail: "https://scontent.cdninstagram.com/v/t51.82787-15/534264129_18411852229129083_6745598627504136897_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=g4KiqYcUaWUQ7kNvwFIcp-R&_nc_oc=AdpGKVvRPVkUiJtEnjXfPj56oUuUMdW-wL_xqtAgA6UerQO6TrqC-1kXF4hqD6xKdgU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3Se0ULKrHZQD797TdIR8wg&_nc_ss=7fa8c&oh=00_AQGiqER5Ox8knVWdXTCaHsdGZjH0A99pgVdsc-8sIdz3Dw&oe=6A778C22" },
  { url: "https://www.techpana.com/2025/152488/pm-kp-sharma-oli-chatgpt-and-ai-usage-digital-nepal", title: "म पनि च्याटजीपीटी चलाउँछु, तर एआईले मानव मस्तिष्कलाई जित्न सक्दैन: प्रधानमन्त्री", thumbnail: "https://techpana.prixacdn.net/media/albums/kp-sharma-oli_r9eGFRkTWX.jpg" },
  // { url: "https://www.nayapatrikadaily.com/news-details/175424/2025-08-15" },
  // { url: "https://www.onlinekhabar.com/2025/08/1742894/i-also-use-ai-chatgpt-will-tell-me-everything-kp-oli" },
  { url: "https://newsofnepal.com/2025/08/15/725445/", title: "‘डिजिटल नेपाल कन्क्लेभ २०२५’ सम्पन्न", thumbnail: "https://newsofnepal.com/wp-content/uploads/2025/08/Digital-Nepal-1-6.jpg" },
  { url: "https://businesspati.com/%E0%A4%A1%E0%A4%BF%E0%A4%9C%E0%A4%BF%E0%A4%9F%E0%A4%B2-%E0%A4%A8%E0%A5%87%E0%A4%AA%E0%A4%BE%E0%A4%B2-%E0%A4%95%E0%A4%A8%E0%A5%8D%E0%A4%95%E0%A5%8D%E0%A4%B2%E0%A5%87%E0%A4%AD-%E0%A5%A8%E0%A5%A6/", title: "डिजिटल नेपाल कन्क्लेभ २०२५ सम्पन्न, गगन थापादेखि सञ्चार, अर्थमन्त्रीसहित प्रधानमन्त्रीसम्मले गरे डिजिटल रुपान्तरणका कुरा - Business Pati", thumbnail: "https://businesspati.com/wp-content/uploads/2025/08/PM-oli.jpg" },
  // { url: "https://clickmandu.com/2025/08/405396.html" },
  // { url: "https://ictside.com/2025/08/17/digital-nepal-conclave-2025-concludes-leaders-from-gagan-thapa-and-the-communications-and-finance-ministers-to-the-prime-minister-discuss-digital-transformation/" },
];
