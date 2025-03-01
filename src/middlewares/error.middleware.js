import {ValidationException} from "../lib/classess/errors.class.js"



export default function errorMiddleware(err, req, res, next) {
  if (err instanceof ValidationException) {
    return res.statusCode(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.errors,
    });
  }

  const code = err.statusCode || 500;
  const message = err.message || `internal server error`;



  return res.status(code).json({
    success:false,
    message,
    trace:err.stack,
  })
}
