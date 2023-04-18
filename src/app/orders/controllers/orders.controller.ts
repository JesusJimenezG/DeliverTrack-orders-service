import { Request, Response } from 'express';
import ResponseHandler from 'delivertrack-middlewares/utils/network.handler';

const createOrder = (_: Request, res: Response) => {
    try {
        ResponseHandler.success(res, { message: 'Order created successfully' });
    } catch (error) {
        ResponseHandler.error(res);
    }
};

const getOrder = (_: Request, res: Response) => {
    try {
        ResponseHandler.success(res, {
            message: 'Order retrieved successfully'
        });
    } catch (error) {
        ResponseHandler.error(res);
    }
};

const modifyOrder = (_: Request, res: Response) => {
    try {
        ResponseHandler.success(res, {
            message: 'Order modified successfully'
        });
    } catch (error) {
        ResponseHandler.error(res);
    }
};

const deleteOrder = (_: Request, res: Response) => {
    try {
        ResponseHandler.success(res, { message: 'Order deleted successfully' });
    } catch (error) {
        ResponseHandler.error(res);
    }
};

export { createOrder, getOrder, modifyOrder, deleteOrder };
