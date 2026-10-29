import mongoose from "mongoose";

const login_work = mongoose.Schema({
  username: { type: String },
  password: { type: String },
});

const logg = new mongoose.model("logg", login_work);

export default logg;
