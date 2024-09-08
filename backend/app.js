import express from 'express';
// const dotenv = require('dotenv');
// dotenv.config();
const app=express();
// import mongoose from "mongoose";

//  const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "MERN_STACK_PERSONAL_PORTFOLIO",
//     })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log("Some error occured while connecting to database:", err);
//     });
// };
// dbConnection();
export default app;
