import { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(error: unknown, req: Request, res: Response, next: NextFunction) {
  console.error(error);
  let errorMessage = "An Unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    console.log("error: ", error);
    statusCode = error.status;
    errorMessage = error.message;
  }
  return res.status(statusCode).json({ error: errorMessage });
}

export function unknownRoute(req: Request, res: Response, next: NextFunction) {
  next(createHttpError(404, "Endpoint not found"));
}