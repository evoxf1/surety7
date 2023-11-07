import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const CompanyTable = ({ companies }) => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Company Name</th>
          <th className="py-2 px-4 border-b">Created At</th>
          <th className="py-2 px-4 border-b">Updated At</th>
          <th className="py-2 px-4 border-b">Deleted At</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100">
          <td className="py-2 px-4 border-b">ID</td>
          <td className="py-2 px-4 border-b">name</td>
          <td className="py-2 px-4 border-b"></td>
          <td className="py-2 px-4 border-b"></td>
          <td className="py-2 px-4 border-b"></td>
          <td className="flex gap-2 py-2 px-4 border-b">
            <RemoveBtn />
            <Link href={"/editCompany/123"}>
              {" "}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                ✏️
              </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CompanyTable;
