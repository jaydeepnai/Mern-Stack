import { Router } from 'express';
import { OrderController } from '../controllers/order.controller';

const router = Router();

router.post('/', OrderController.create);
router.get('/:userId', OrderController.getUserOrders);

export default router; 