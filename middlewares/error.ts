//importing pakages
import { NextFunction, Request, Response } from "express";

//importing functions
import ErrorHandler from "../helpers/errorHandler";

//configure custom error handling middleware
const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //set default status code and message if not provided
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error.";

  //wrong mongodb id error
  if ((err.name = "CastError")) {
    const message = `Resources not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt error
  if ((err.name = "JsonWebTokenError")) {
    const message = `Your token is invalid, try again.`;
    err = new ErrorHandler(message, 400);
  }

  //jwt expiration error
  if ((err.name = "TokenExpiredError")) {
    const message = `Token is expired, try again.`;
    err = new ErrorHandler(message, 400);
  }
};

export default errorMiddleware;
