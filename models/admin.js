import mongoose, { Schema } from "mongoose";
const adminSchema = new Schema(
  {
    ID: Number,
    name: String,
    password: String,
  },
  {
    timestamps: true,
  }
);
const Admin = mongoose.model.Admin || mongoose.model("Employee", adminSchema);

export default Admin;
