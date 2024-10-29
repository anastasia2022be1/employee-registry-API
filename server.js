import express from "express";
import mongoose from "mongoose";

import { connect } from "./db.js";

import employeeRoutes from './routes/employeeRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import officeRoutes from './routes/officeRoutes.js';


const app = express();
const port = process.env.PORT || 3000;

// Mittleware
app.use(express.json());

// Connect to MongoDB
await connect();

// Register Routes
app.use('/api', employeeRoutes);
app.use('/api', roleRoutes);
app.use('/api', officeRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});