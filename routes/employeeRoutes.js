import express from 'express';
import Employee from '../models/Employee.js';

const router = express.Router();

// GET /employee - return all employees (no reference data included)
// http://localhost:3003/api/employee
router.get("/employee", async (req, res, next) => {
    try {
        const data = await Employee.find();

        console.log(req.query);
        res.json(data);
    } catch (error) {
        next(error)
    }
})


// GET /employee?full=true - return all employees including address, office and roles
// http://localhost:3003/api/employee?full=true
router.get('/employee', async (req, res, next) => {
    try {
        const employees = req.query.full === 'true'
            ? await Employee.find().populate('contactAddress office roles')
            : await Employee.find();
        res.json(employees);
    } catch (error) {
        next(error);
    }
});

export default router;
