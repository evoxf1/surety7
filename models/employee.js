import mongoose, { Schema } from "mongoose";

let Employee;

try {
  // Try to fetch the existing model to avoid recompiling it
  Employee = mongoose.model("Employee");
} catch (error) {
  // If the model doesn't exist, create it
  const employeeSchema = new Schema(
    {
      ID: Number,
      name: String,
      companyID: Number,
    },
    {
      timestamps: true,
    }
  );

  // Create the model
  Employee = mongoose.model("Employee", employeeSchema);
}

export default Employee;
