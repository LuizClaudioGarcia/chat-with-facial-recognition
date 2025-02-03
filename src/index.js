const express = require("express");
require("dotenv").config();

import routes from "./routes/all.js";
import { createServer } from "http";
import cors from "cors";

const port = 8080;
const host = "0.0.0.0";

export async function initServer() {
  const app = express();
  const http = new createServer(app);
  app.use(
    cors({
      origin: ["*"],
    })
  );
  app.use(express.json());

  // Rotas
  app.use("/api", routes);

  http.listen(port, host);
}
