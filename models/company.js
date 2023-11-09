import mongoose, { Schema } from "mongoose";

let Company;

try {
  // Try to fetch the existing model to avoid recompiling it
  Company = mongoose.model("Company");
} catch (error) {
  // If the model doesn't exist, create it
  const companySchema = new Schema(
    {
      ID: Number,
      name: String,
    },
    {
      timestamps: true,
    }
  );

  // Create the model
  Company = mongoose.model("Company", companySchema);
}

export default Company;
