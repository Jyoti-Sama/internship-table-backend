import express from 'express'
import dotenv from 'dotenv';
import { connection } from './database/DB.js';
import routes from './routes/peopleRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors'

dotenv.config();
connection();
const app = express();

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors());
app.use('/people',routes)


const PORT = process.env.PORT;
app.listen(PORT,()=>console.log(`listening on port ${PORT}`))

app.get('/',(req,res)=>{
    res.send("gg")
})