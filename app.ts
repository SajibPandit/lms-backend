//importing pakages
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//importing functions
import errorMiddleware from './middlewares/error'

//load environment variables
require("dotenv").config();

//app initialization
export const app = express();

//body-parser setup
app.use(express.json({ limit: "50mb" }));

//cookie parser setup
app.use(cookieParser());

//cors allowed origin setup
app.use(cors({ origin: process.env.ORIGIN }));



//testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.json({
        success : true,
        message : 'API is Working'
    })
});

//handle unknown route
app.all("*",(req : Request, res : Response , next : NextFunction)=>{
    const error = new Error(`Route ${req.originalUrl} not found`)
    res.statusCode = 404;
    next(error)
})

//custom errror handler
app.use(errorMiddleware)
