const express = require("express");
import { Request, Response } from "express";
import router from "./app/routes/router";
import cors from "cors";
import notFound from "./app/middleware/notFound";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/v1", router);
app.use(notFound);

export default app;
