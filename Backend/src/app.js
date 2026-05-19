import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import feedRoutes from "./modules/feed/feed.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();


app.use(helmet());


app.use(cors({
  origin: process.env.BASE_URL,
}));

app.use(express.json());


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);


app.use("/feed", feedRoutes);
app.use(errorMiddleware);

export default app;