import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export class CustomerService {
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
      const result = await this.prisma.customer.findMany();
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
      const result = await this.prisma.customer.findUnique({
        where: { id: Number(id) },
      });
      if (!result) {
        res.status(404).send({ message: `Customer with id ${id} not found` });
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
    const { name, email, phone } = req.body;

    // validate emil @see https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      res.status(400).send({ message: "Email address invalid" });
      return;
    }

    if (phone.length < 10) {
      res.status(400).send({ message: "Phone should be at least 10" });
      return;
    }

    try {
      const result = await this.prisma.customer.create({
        data: {
          name,
          email,
          phone,
        },
      });
      res.status(201).json(result);
    } catch (e) {
      res.status(500).send({ message: "An error occured" });
      res.status(404).send({ message: "customer not found" });
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
      const result = await this.prisma.customer.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.json(result);
    } catch (e) {
      res.status(404).send({ message: `Customer with id ${id} not found` });
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
      const result = await this.prisma.customer.delete({
        where: { id: Number(id) },
      });
      res.status(202).json(result);
    } catch (e) {
      console.log(e);
      res.status(404).send({ message: `Customer with id ${id} not found` });
    }
  }
}
