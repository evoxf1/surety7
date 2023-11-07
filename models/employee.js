import mongoose, { Schema } from "mongoose";
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
const Employee =
  mongoose.model.Employee || mongoose.model("Employee", employeeSchema);

export default Employee;
