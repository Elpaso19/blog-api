import express from "express";
import { createServer } from "http";

import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import appRouter from "../routes/index.routes.js";
import errorMiddleware from "../middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import configService from "../lib/classes/config.class.js";
import { convertHumanReadableTimeToMilliseconds } from "../lib/utils.js";

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(cookieParser(configService.getOrThrow("COOKIE_SECRET"), {
    sameSite: "none",
    secure: configService.getOrThrow("NODE_ENV") === "production",
    maxAge: convertHumanReadableTimeToMilliseconds(
      configService.getOrThrow("COOKIE_EXPIRES_IN")
    ),
  })
);

app.use("/api/v1", appRouter);

app.use(errorMiddleware);


export { app, server };
