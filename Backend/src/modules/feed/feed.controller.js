import Feed from "./feed.model.js";

import redisClient from "../../config/redis.js";

import { getIO } from "../../socket/socket.js";


// GET /feed
export const getFeeds = async (req, res, next) => {
  try {

    const cachedFeeds = await redisClient.get("feeds");

    if (cachedFeeds) {
      return res.json({
        source: "redis",
        data: JSON.parse(cachedFeeds),
      });
    }

    const feeds = await Feed.find().sort({ createdAt: -1 });

    await redisClient.setEx(
      "feeds",
      60,
      JSON.stringify(feeds)
    );

    return res.json({
      source: "database",
      data: feeds,
    });

  } catch (error) {

    next(error);

  }
};


// POST /feed
export const createFeed = async (
  req,
  res,
  next
) => {

  try {

    const feed = await Feed.create(req.body);

    await redisClient.del("feeds");

    getIO().emit("new-feed", feed);

    return res.status(201).json({
      success: true,
      data: feed,
    });

  } catch (error) {

    next(error);

  }
};