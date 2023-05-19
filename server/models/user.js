import mongoose from "mongoose";
const userModel = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);
const userSchema = mongoose.model("User", userModel);
export default userSchema;
