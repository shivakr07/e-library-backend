import express from "express";

const app = express();

//Routes

//http methods
app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to elib api's" });
});

export default app;
