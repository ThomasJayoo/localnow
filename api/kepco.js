import axios from 'axios';
import cheerio from 'cheerio';

export default async function fetchKepco() {
  const results = [];
  try {
    const { data } = await axios.get("https://cyber.kepco.co.kr/"); // 임시 주소
    const $ = cheerio.load(data);
    $("a").each((_, el) => {
      const text = $(el).text().trim();
      if (text.includes("PDF")) {
        results.push({ source: "KEPCO", title: text, link: $(el).attr("href") });
      }
    });
  } catch (err) {
    console.error("KEPCO fetch error:", err);
  }
  return results;
}