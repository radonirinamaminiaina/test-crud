import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export class AddressService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  /**
   * findAll
   *
   * list all customers
   */

  async findAll(_: Request, res: Response) {
    try {
      const result = await this.prisma.address.findMany({
        include: {
          customer: true,
        },
      });
      res.json(result);
    } catch (e) {
      res.status(500).send({ message: "An error occured" });
    }
  }

  /**
   * findById
   *
   * find customer by id
   */

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this.prisma.address.findUnique({
        where: { id: Number(id) },
        include: {
          customer: true,
        },
      });
      if (!result) {
        res.status(404).send({ message: `Address with id ${id} not found` });
        return;
      }
      res.json(result);
    } catch (e) {
      res.status(500).send({ message: "An error occured" });
    }
  }

  /**
   * create
   *
   * Create customer
   */
  async create(req: Request, res: Response) {
    const { zip, city, province, house, customerId } = req.body;

    if (typeof zip !== "number") {
      res.status(400).send({ message: "Please provide valid zip" });
      return;
    }

    try {
      const result = await this.prisma.address.create({
        data: {
          zip,
          city,
          province,
          house,
          customer: {
            connect: { id: customerId },
          },
        },
      });
      res.status(201).json(result);
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "An error occured" });
    }
  }

  /**
   * update
   *
   * update customer
   */
  async update(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this.prisma.address.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.json(result);
    } catch (e) {
      console.log(e);
      res.status(404).send({ message: `Address with id ${id} not found` });
    }
  }

  /**
   * delete
   *
   * delete customer
   */
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await this.prisma.address.delete({
        where: { id: Number(id) },
      });
      res.status(202).json(result);
    } catch (e) {
      console.log(e);
      res.status(404).send({ message: `Address with id ${id} not found` });
    }
  }
}
