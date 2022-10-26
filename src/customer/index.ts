import { Express, Router } from "express";
import { CustomerService } from "./service";

export default function customer(router: Router) {
  const _customer = new CustomerService();

  router.get("/customer", (req, res) => _customer.findAll(req, res));
  router.get("/customer/:id", (req, res) => _customer.findById(req, res));
  router.post("/customer", (req, res) => _customer.create(req, res));
  router.put("/customer/:id", (req, res) => _customer.update(req, res));
  router.delete("/customer/:id", (req, res) => _customer.delete(req, res));
}
