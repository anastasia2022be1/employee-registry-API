import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    fullName: { type: String, required: true },
    position: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactAddress: { type: mongoose.ObjectId, ref: "Address", required: true },
    office: { type: mongoose.ObjectId, ref: "Office", required: true },
    roles: [{ type: mongoose.ObjectId, ref: "Role", required: true }]
})

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;