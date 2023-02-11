const mongoose = require("mongoose");

let connectionString = "";

if (process.env.NODE_ENV === "production") {
  connectionString = ``;
} else if (process.env.NODE_ENV === "test") {
  connectionString = "";
} else {
  connectionString ="";
}

const connectDB = async () => {
  try {
    // console.log(connectionString)
    connectionString="mongodb://localhost:27017/TriNit"
    await mongoose.connect(connectionString, {
    //   useCreateIndex: true,
      useNewUrlParser: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true,

    })

    console.log("MongoDB connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;