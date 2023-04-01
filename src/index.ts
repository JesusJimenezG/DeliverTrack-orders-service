import { createApp } from './app/app';
import config from './config/config';

const app = createApp();

const PORT = config.server.port;
const HOST = config.server.host;

app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});
