import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import 'dotenv/config';
import cookieParser from "cookie-parser";
import { connect } from "mongoose";
import connectDB from "./config/mongodb.js"; 

dotenv.config();

const app = express();
const port = process.env.PORT || 4000
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}))


app.get('/', (req, res)=> res.send("API Working "));

app.listen(port, ()=> console.log(`Server started on PORT:${port}`));
console.log("MONGODB_URI =", process.env.MONGODB_URI);

