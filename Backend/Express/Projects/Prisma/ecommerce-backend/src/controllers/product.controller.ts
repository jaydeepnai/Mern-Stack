import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const ProductController = {
    create: async (req: Request, res: Response) => {
        try {
            const { name, description, price, stock } = req.body;
            const product = await prisma.product.create({
                data: { name, description, price, stock }
            });
            res.json(product);
        } catch (error) {
            res.status(400).json({ error: "Failed to create product" });
        }
    },

    getAll: async (_req: Request, res: Response) => {
        try {
            const products = await prisma.product.findMany();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch products" });
        }
    }
}; 