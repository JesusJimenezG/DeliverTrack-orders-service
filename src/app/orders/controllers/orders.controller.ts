import { Request, Response } from 'express';
import ResponseHandler from 'delivertrack-middlewares/utils/network.handler';

const createOrder = (_: Request, res: Response) => {
    try {
        ResponseHandler.success(res);
    } catch (error) {
        ResponseHandler.error(res);
    }
};

const getOrder = (_: Request, res: Response) => {
    try {
        ResponseHandler.success(res);
    } catch (error) {
        ResponseHandler.error(res);
    }
};

const modifyOrder = (_: Request, res: Response) => {
    try {
        ResponseHandler.success(res);
    } catch (error) {
        ResponseHandler.error(res);
    }
};

const deleteOrder = (_: Request, res: Response) => {
    try {
        ResponseHandler.success(res);
    } catch (error) {
        ResponseHandler.error(res);
    }
};

export { createOrder, getOrder, modifyOrder, deleteOrder };
