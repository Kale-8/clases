import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import {router, initRoutes} from "./routes/index.ts";
import {requestLogger} from "./middlewares/logger.middleware.ts";

const port = process.env.PORT || 3001;
const app = express();

app.use(cors({
    origin: (origin, callback) =>
        !origin || origin === "http://localhost:5173" ? callback(null, true) :
            callback(new Error("Not allowed by CORS"))
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(requestLogger);

await initRoutes();
app.use(router);

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}!`);
});