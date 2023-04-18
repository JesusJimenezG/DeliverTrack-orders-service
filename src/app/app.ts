import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes';

export const createApp = () => {
    const app = express();
    app.use(
        cors({
            origin: '*',
            credentials: true
        })
    );
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Set up routes
    app.use('/api/orders', router);

    return app;
};
