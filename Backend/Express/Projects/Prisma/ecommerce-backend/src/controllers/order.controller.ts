import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const OrderController = {
    create: async (req: Request, res: Response) => {
        try {
            const { userId, products, total } = req.body;
            const order = await prisma.order.create({
                data: { userId, products, total }
            });
            res.json(order);
        } catch (error) {
            res.status(400).json({ error: "Failed to create order" });
        }
    },

    getUserOrders: async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const orders = await prisma.order.findMany({
                where: { userId },
                include: { user: true }
            });
            res.json(orders);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch orders" });
        }
    }
}; 