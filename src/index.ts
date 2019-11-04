import express from 'express';
import bodyParser from 'body-parser';
import { heroRouter } from './routers/heroRouter';

const app = express();
const port = process.env.MONGO_PORT || 8080;

app.use(bodyParser.json());

app.use((req, resp, next) => {
    (process.env.MONGO_API_STAGE === 'prod')
    ? resp.header('Access-Control-Allow-Origin', process.env.MONGO_APP_URL)
    : resp.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    resp.header('Access-Control-Allow-Credentials', 'true');
    resp.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, PATCH');
    next();
});

app.use('/heroes', heroRouter);

app.listen(port, () => {
    console.log('application started'); 
})
