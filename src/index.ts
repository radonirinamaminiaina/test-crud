import { PrismaClient } from "@prisma/client";
import express from "express";
import address from "./address";
import customer from "./customer";

const prisma = new PrismaClient();
const app = express();

const router = express.Router();

app.use(express.json());

// run our routers
customer(router);
address(router);

// prefix router with api
app.use("/api", router);

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
