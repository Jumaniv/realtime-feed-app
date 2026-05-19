const errorMiddleware = (
  error,
  req,
  res,
  next
) => {

  console.log(error);

  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message:
      error.message || "Internal Server Error",
  });
};

export default errorMiddleware;