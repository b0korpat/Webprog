import express from "express";
import cors from "cors";
import plantRoutes from "./routes/plants.js";
import { initDb } from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("", plantRoutes);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send({ message: err.message });
});

const startServer = async () => {
  await initDb();
  app.listen(3000, () => {
    console.log("listening on port: 3000");
  });
};

startServer();
