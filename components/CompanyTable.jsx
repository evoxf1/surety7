"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";

const CompanyTable = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/companies", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch companies");
        }

        const data = await res.json();
        setCompanies(data.companies);
        setLoading(false);
      } catch (error) {
        console.error("Error loading Companies:", error);
        setError("Error loading Companies");
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  // const extractLastFiveChars = (str) => {
  //   return str.slice(-5);
  // };
  const handleDelete = async (id) => {
    console.log('working');
    try {
      const response = await fetch(
        `http://localhost:3000/api/companies?id=${id}`,
        {
          method: "DELETE",
        }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to delete company. Status: ${response.status}`);
      }
  
      const { message } = await response.json();
      console.log(message);
  
      setCompanies((prevCompanies) =>
        prevCompanies.filter((company) => company.ID !== ID)
      );
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };
  
  return (
    <div className="overflow-x-auto">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Company Name</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th>
              <th className="py-2 px-4 border-b">Deleted At</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, idx) => (
              <tr key={idx} className="bg-gray-100">
                <td className="py-2 px-4 border-b">
                  {company.ID}
                </td>
                <td className="py-2 px-4 border-b">{company.name}</td>
                <td className="py-2 px-4 border-b">
                  {moment(company.createdAt).format("YYYY-MM-DD")}
                </td>
                <td className="py-2 px-4 border-b">
                  {moment(company.updatedAt).format("YYYY-MM-DD")}
                </td>
                <td className="py-2 px-4 border-b">
                  {moment(company.deletedAt).format("YYYY-MM-DD")}
                </td>
                <td className="flex gap-2 py-2 px-4 border-b">
                <button
                onClick={() => handleDelete(company.ID)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                🗑️
              </button>
                  <Link href={`/editCompany/${company.ID}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                      ✏️
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CompanyTable;
