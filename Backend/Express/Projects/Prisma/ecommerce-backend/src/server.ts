import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET as string;

app.get('/', async (req, res) => {
    res.status(200).send('Server Started...!')
})

// User Signup
app.post("/signup", async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });
        res.json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(400).json({ error: "User already exists" });
    }
});

// User Login
app.post("/login", async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Login successful", token });
});

// Get Products
app.get("/products", async (_req: Request, res: Response) => {
    const products = await prisma.product.findMany();
    res.json(products);
});

// Add Product
app.post("/products", async (req: Request, res: Response) => {
    const { name, description, price, stock } = req.body;

    const product = await prisma.product.create({
        data: { name, description, price, stock },
    });

    res.json(product);
});

// Create Order
app.post("/order", async (req: Request, res: Response) => {
    const { userId, products, total } = req.body;

    const order = await prisma.order.create({
        data: { userId, products, total },
    });

    res.json(order);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
