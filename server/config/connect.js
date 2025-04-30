//April Desy

import mongoose from "mongoose";

export function connect_to_mongo() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("MONGO_URI is not defined in the environment variables");
    return;
  }

  const db = mongoose
    .connect(uri, {})
    .then(() => {
      console.log("connected to db");
    })
    .catch((error) => {
      console.error("error connecting to mongo:", error);
    });

  return db;
}
