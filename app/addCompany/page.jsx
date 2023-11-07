"use client"
import React, { useState } from "react";

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
  });

  const [companies, setCompanies] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the form data to the companies array
    setCompanies([...companies, formData]);
    // Clear the form fields after submission
    setFormData({
      id: "",
      name: "",
      createdAt: "",
      updatedAt: "",
      deletedAt: "",
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white rounded shadow"
      >
        <div className="mb-4">
          <label
            htmlFor="id"
            className="block text-sm font-medium text-gray-600"
          >
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
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
          Add Company
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
