
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import BidTable from "./components/BidTable";

function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [agency, setAgency] = useState("");

  useEffect(() => {
    fetch("/api/fetchAll")
      .then(res => res.json())
      .then(setData);
  }, []);

  const filtered = data.filter(item =>
    (!keyword || item.title.includes(keyword)) &&
    (!agency || item.source === agency)
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">📑 공공기관 PDF 입찰 정보</h1>
      <SearchBar keyword={keyword} onKeywordChange={setKeyword} agency={agency} onAgencyChange={setAgency} />
      <BidTable data={filtered} />
    </div>
  );
}

export default App;
