import { PrismaClient } from "@prisma/client";
import express from "express";
import customer from "./customer";

const prisma = new PrismaClient();
const app = express();

const router = express.Router();

app.use(express.json());

customer(router);

app.use("/api", router);

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
