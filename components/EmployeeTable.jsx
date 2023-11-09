"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import moment from 'moment';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/employees", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch employees");
        }

        const data = await res.json();
        setEmployees(data.employees);
        setLoading(false);
      } catch (error) {
        console.error("Error loading Employees:", error);
        setError("Error loading Employees");
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-w-full bg-white border border-gray-300">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">NAME</th>
            <th className="py-2 px-4 border-b">COMPANY ID</th>
            <th className="py-2 px-4 border-b">Created At</th>
            <th className="py-2 px-4 border-b">Updated At</th>
            <th className="py-2 px-4 border-b">Deleted At</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan="6" className="py-2 px-4 text-center">
                Loading...
              </td>
            </tr>
          )}

          {error && (
            <tr>
              <td colSpan="6" className="py-2 px-4 text-center text-red-500">
                Error: {error}
              </td>
            </tr>
          )}

          {!loading &&
            !error &&
            employees.map((emp, idx) => (
              <tr key={idx} className="bg-gray-100">
                <td className="py-2 px-4 border-b">{emp.ID}</td>
                <td className="py-2 px-4 border-b">{emp.name}</td>
                <td className="py-2 px-4 border-b">{emp.companyID}</td>
                <td className="py-2 px-4 border-b">
                  {moment(emp.createdAt).format("YYYY-MM-DD")}
                </td>
                <td className="py-2 px-4 border-b">
                  {moment(emp.updatedAt).format("YYYY-MM-DD")}
                </td>
                <td className="py-2 px-4 border-b">
                  {moment(emp.deletedAt).format("YYYY-MM-DD")}
                </td>
                <td className="py-2 px-4 border-b flex">
                  <RemoveBtn />
                  <Link href={`/editEmployee/${emp.ID}`}>
                    {" "}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                      ✏️
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
