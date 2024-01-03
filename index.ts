"use strict";

import express, { Request, Response } from "express";
// import cors from "cors";
import userRouter from './src/routes/userRouter'
const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}));
// app.use(cors());
app.use("/users", userRouter);
console.log("inside index")

app.listen(3000, () => {
    console.log('Server running');
});