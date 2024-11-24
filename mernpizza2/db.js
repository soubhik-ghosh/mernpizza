
const mongoose = require("mongoose"); //incude 
const mongoURL = "mongodb://127.0.0.1:27017/demo"


//mongodb+srv://bwubca22425:<wZockKKoruv1r6F8>@cluster0.b6j6d.mongodb.net/demo
 
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("MongoDB is connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

module.exports = mongoose;
