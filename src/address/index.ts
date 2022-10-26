import { Express, Router } from "express";
import { AddressService } from "./service";

export default function address(router: Router) {
  const _address = new AddressService();

  router.get("/address", (req, res) => _address.findAll(req, res));
  router.get("/address/:id", (req, res) => _address.findById(req, res));
  router.post("/address", (req, res) => _address.create(req, res));
  router.put("/address/:id", (req, res) => _address.update(req, res));
  router.delete("/address/:id", (req, res) => _address.delete(req, res));
}
