import express from 'express';
import {
    createOrder,
    deleteOrder,
    getOrder,
    modifyOrder
} from '../orders/controllers/orders.controller';

const router = express.Router();

router.use('/create', createOrder);
router.use('/get/id', getOrder);
router.use('/modify/id', modifyOrder);
router.use('/delete/id', deleteOrder);

export default router;
