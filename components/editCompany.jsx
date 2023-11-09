"use client";
import React, { useState, useEffect } from "react";

const CompanyForm = ({ companyId }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    createdAt: "",
    updatedAt: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // Fetch company data by ID and populate the form fields
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/companies/${companyId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch company");
        }
        const companyData = await response.json();
        // Update the form data with the retrieved company data
        setFormData({
          id: companyData._id,
          name: companyData.name,
          createdAt: companyData.createdAt,
          updatedAt: companyData.updatedAt,
        });
      } catch (error) {
        console.error("Error fetching company:", error);
        // Handle the error, display an error message, or perform other actions as needed.
      }
    };

    if (companyId) {
      fetchCompanyData();
    }
  }, [companyId]); // Fetch company data when the companyId changes

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the company name
      const response = await fetch(
        `http://localhost:3000/api/companies/${companyId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update company");
      }

      // Optionally, you can handle success, display a message, or navigate to another page here.
    } catch (error) {
      console.error("Error updating company:", error);
      // Handle the error, display an error message, or perform other actions as needed.
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white rounded shadow"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Company Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Company
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
