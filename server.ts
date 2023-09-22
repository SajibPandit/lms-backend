//Importing app
import { app } from "./app";

//load environment variables
import dotenv from 'dotenv';
import connectDB from "./config/db";
dotenv.config();

//Creating Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    //database connection
    connectDB()
});
