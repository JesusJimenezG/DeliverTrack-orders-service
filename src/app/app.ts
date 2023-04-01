import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const createApp = () => {
    const app = express();
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    return app;
};