import express from "express"; // Use import em vez de require
import dotenv from "dotenv";
import routes from "./routes/all.js";
import { createServer } from "http";
import cors from "cors";

dotenv.config();

const port = 8080;
const host = "0.0.0.0";

export async function initServer() {
  const app = express();
  const http = createServer(app);
  app.use(
    cors({
      origin: ["*"],
    })
  );
  app.use(express.json());

  // Rotas
  app.use("/api", routes);

  http.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
}
