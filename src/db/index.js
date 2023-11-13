// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// // import dotenv from "dotent"
// // dotenv.config({path:'../env'})

// const connectDB = async ()=>{
//    try {
//     const connectionInstance = mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log(`MONGODB connected !! HOST  ${connectionInstance.connection.host}`);
//    } catch (error) {
//     console.log("error",error);
//     process.exit(1);
//    }
// }

// export default connectDB;

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Uncomment and configure dotenv if you're using a .env file
// import dotenv from "dotenv";
// dotenv.config({ path: '../.env' });

const connectDB = async () => {
   try {
      // Await the connection to ensure it's established
     
      const connectionInstance =  await mongoose.connect(process.env.MONGO_URI);
      
      // Access the host from the mongoose connection object
      console.log(`MONGODB connected !! HOST  ${connectionInstance.connection.host}`);
   } catch (error) {
      console.log("error", error);
      process.exit(1);
   }
}

export default connectDB;
