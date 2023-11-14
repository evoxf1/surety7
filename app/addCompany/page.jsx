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

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add company");
      }

      const addedCompany = await response.json();

   
      setFormData({
        id: "",
        name: "",
        createdAt: "",
        updatedAt: "",
        deletedAt: "",
      });
      setSuccessMessage("Company added successfully!");
      console.log("Company added successfully:", addedCompany);
    } catch (error) {
      console.error("Error adding company:", error);
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
        {successMessage && (
        <div className="mt-4 text-green-600 font-semibold">
          {successMessage}
        </div>
      )}
      </form>
    </div>
  );
};

export default CompanyForm;
