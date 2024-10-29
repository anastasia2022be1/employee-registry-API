import express from 'express';
import Role from '../models/Role.js';
import Employee from '../models/Employee.js';

const router = express.Router();

// GET /role - Return all roles without employees
// http://localhost:3003/api/role
router.get('/role', async (req, res, next) => {
    try {
        const roles = req.query.full === 'true'
            ? await Role.find().populate('employees')
            : await Role.find();
        res.json(roles);
    } catch (error) {
        next(error);
    }
});

// GET /role/:id/employees - Return all employees with the given role ID
// http://localhost:3003/api/role/6720a2b6a6e2001ea2e22d42/employees
router.get('/role/:id/employees', async (req, res, next) => {
    try {
        const employees = await Employee.find({ roles: req.params.id });
        res.json(employees);
    } catch (error) {
        next(error);
    }
});

export default router;
