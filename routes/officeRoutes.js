import express from 'express';
import Office from '../models/Office.js';
import Employee from '../models/Employee.js';

const router = express.Router();

// GET /office - Return all offices without employees
// http://localhost:3003/api/office
router.get('/office', async (req, res, next) => {
    try {
        const offices = await Office.find();
        res.json(offices);
    } catch (error) {
        next(error);
    }
});

// GET /office/:id/employees - Return all employees working at the given office ID
// http://localhost:3003/api/office/6720a2b6a6e2001ea2e22d3e/employees
router.get('/office/:id/employees', async (req, res, next) => {
    try {
        const employees = await Employee.find({ office: req.params.id });
        res.json(employees);
    } catch (error) {
        next(error);
    }
});

export default router;
