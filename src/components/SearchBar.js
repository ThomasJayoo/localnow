
import React from "react";

const SearchBar = ({ keyword, onKeywordChange, agency, onAgencyChange }) => (
  <div className="flex flex-col md:flex-row gap-4 mb-6">
    <input
      type="text"
      placeholder="🔍 PDF, 프로그램 등 검색"
      value={keyword}
      onChange={(e) => onKeywordChange(e.target.value)}
      className="border border-gray-300 rounded-md px-4 py-2 flex-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <select
      value={agency}
      onChange={(e) => onAgencyChange(e.target.value)}
      className="border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="">전체 기관</option>
      <option value="G2B">조달청</option>
      <option value="KEPCO">한국전력</option>
    </select>
  </div>
);

export default SearchBar;
