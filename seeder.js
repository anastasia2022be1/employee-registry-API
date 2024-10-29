import mongoose from 'mongoose';
import Employee from './models/Employee.js';
import Address from './models/Address.js';
import Office from './models/Office.js';
import Role from './models/Role.js';

const seedDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    await Office.deleteMany({});
    await Address.deleteMany({});
    await Role.deleteMany({});
    await Employee.deleteMany({});

    // Create Offices
    const offices = await Office.insertMany([
        { streetNameAndNumber: '123 Main St', areaCode: '10001', city: 'New York' },
        { streetNameAndNumber: '456 Elm St', areaCode: '10002', city: 'New York' },
        { streetNameAndNumber: '789 Maple Ave', areaCode: '10003', city: 'New York' }
    ]);

    // Create Roles
    const roles = await Role.insertMany([
        { name: 'Developer' },
        { name: 'Manager' },
        { name: 'Marketing' },
        { name: 'HR' },
        { name: 'Management' }
    ]);

    // Create Addresses and Employees
    const employees = [];
    for (let i = 0; i < 15; i++) {
        const address = await Address.create({
            streetName: `Street ${i}`,
            streetNumber: `${i}`,
            areaCode: 10000 + i,
            city: 'New York'
        });

        const employee = await Employee.create({
            fullName: `Employee ${i}`,
            position: `Position ${i}`,
            email: `employee${i}@example.com`,
            contactAddress: address._id,
            office: offices[0]._id,
            roles: [roles[i % roles.length]._id]
        });

        employees.push(employee);
    }

    console.log("Database seeded!");
    mongoose.connection.close();
};

seedDB().catch(err => {
    console.error(err);
    mongoose.connection.close();
});
