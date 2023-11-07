import mongoose, { Schema } from "mongoose";
const companySchema = new Schema(
  {
    ID: Number,
    name: String,
  },
  {
    timestamps: true,
  }
);
const Company =
  mongoose.model.Company || mongoose.model("Employee", companySchema);

export default Company;
