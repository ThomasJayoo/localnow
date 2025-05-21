import axios from 'axios';
import cheerio from 'cheerio';

export default async function fetchG2B() {
  const results = [];
  try {
    const { data } = await axios.post("https://www.g2b.go.kr:8101/ep/tbid/tbidList.do", new URLSearchParams({
      searchDtType: "1",
      fromBidDt: "2025/05/01",
      toBidDt: "2025/05/21",
      recordCountPerPage: "10",
      currentPageNo: "1",
    }).toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });

    const $ = cheerio.load(data);
    $("a").each((_, el) => {
      const text = $(el).text().trim();
      if (text.includes("PDF")) {
        results.push({ source: "G2B", title: text, link: $(el).attr("href") });
      }
    });
  } catch (err) {
    console.error("G2B fetch error:", err);
  }
  return results;
}