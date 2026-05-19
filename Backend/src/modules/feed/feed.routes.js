import express from "express";

import {
  getFeeds,
  createFeed,
} from "./feed.controller.js";

import validate from "../../middleware/validate.middleware.js";

import {
  createFeedSchema,
} from "./feed.validation.js";

const router = express.Router();

router.get("/", getFeeds);

router.post(
  "/",
  validate(createFeedSchema),
  createFeed
);

export default router;