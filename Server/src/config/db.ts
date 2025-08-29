import mongoose from "mongoose"

const dbConnect = () => {
  mongoose
    .connect("mongodb+srv://vishnusindhal5040:Vishnu$2151@eventopiadb.prvfrwe.mongodb.net/Brain_up")
    .then(() => {
      console.log("Connected Successfully")
    })
    .catch((err) => {
      console.log("Something Wrong", err)
    })
}

export default dbConnect