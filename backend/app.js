import express from "express";
import a1 from "./routes/vehicle.js";
import rootPage from './routes/root.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import member from "./routes/member.js";
import order  from "./routes/order.js";
import countries  from "./routes/country.js";
import load from "./middleware/load.js";

const app = express()

// Middleware
app.use(cors({}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs');

app.use('/',rootPage)

app.use('/vehicle',a1);
app.use('/member',member);
app.use('/country',countries);
app.use('/order',order);

export {app}