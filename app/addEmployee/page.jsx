'use client'
import React, { useState } from "react";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    ID: "",
    name: "",
    companyID: "", // Assuming companyId for the employee
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleNameChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: value,
    }));
  };

  const handleIdChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      ID: value,
    }));
  };
  
  const handleCompanyIdChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      companyID: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      // Assuming the server responds with the added employee data
      const addedEmployee = await response.json();

      // Clear the form fields after submission
      setFormData({
        ID: "",
        name: "",
        companyID: "",
        createdAt: "",
        updatedAt: "",
        deletedAt: "",
      });
      setSuccessMessage("Employee added successfully!");
      console.log("Employee added successfully:", addedEmployee);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white rounded shadow"
      >
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-600">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.ID}
            onChange={handleIdChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Employee Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleNameChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="companyId" className="block text-sm font-medium text-gray-600">
            Company ID
          </label>
          <input
            type="text"
            id="companyId"
            name="companyId"
            value={formData.companyID}
            onChange={handleCompanyIdChange}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Employee
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

export default EmployeeForm;
