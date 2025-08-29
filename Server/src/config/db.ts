import mongoose from "mongoose"

// Load environment variables
const dbConnect = () => {
  const dbUrl = process.env.DBurl; // Get DBurl from .env
  if (!dbUrl) {
    console.log("Database URL not found in environment variables");
    return;
  }
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("Connected Successfully")
    })
    .catch((err) => {
      console.log("Something Wrong", err)
    })
}

export default dbConnect