import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const OrderController = {
    create: async (req: Request, res: Response) => {
        try {
            const { userId, products } = req.body;

            const productDetails = await prisma.product.findMany({
                where: {
                    id: { in: products.map((p: any) => p.productId) }
                },
                select: {
                    id: true,
                    price: true,
                    stock: true
                }
            });

            // Calculate total price and check stock availability
            let total = 0;
            const updatedProducts = [];

            for (const item of products) {
                const product = productDetails.find(p => p.id === item.productId);
                if (!product || product.stock < item.quantity) {
                    res.status(400).json({ error: `Product ${item.productId} is out of stock or insufficient stock available.` });
                    return;
                }

                total += product.price * item.quantity;
                updatedProducts.push({
                    productId: item.productId,
                    stock: item.quantity,
                    price: product.price
                });
            }

            const order = await prisma.order.create({
                data: {
                    userId,
                    products: updatedProducts,
                    total
                }
            });

            // Reduce product stock in stock
            for (const item of products) {
                await prisma.product.update({
                    where: { id: item.productId },
                    data: { stock: { decrement: item.quantity } }
                });
            }

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
