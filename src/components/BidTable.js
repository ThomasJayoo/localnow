
import React from "react";

const BidTable = ({ data }) => {
  if (!data.length) {
    return <p className="text-gray-500">📭 관련 입찰 정보가 없습니다.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 shadow">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-indigo-50 text-gray-700 font-semibold">
          <tr>
            <th className="px-4 py-3 border-b">기관</th>
            <th className="px-4 py-3 border-b">제목</th>
            <th className="px-4 py-3 border-b">링크</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{item.source}</td>
              <td className="px-4 py-2 border-b">{item.title}</td>
              <td className="px-4 py-2 border-b">
                <a href={item.link} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                  보기
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidTable;
