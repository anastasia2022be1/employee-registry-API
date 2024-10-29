import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name: { type: String, required: true },
    employees: [{ type: mongoose.ObjectId, ref: "Employee" }]
})

const Role = mongoose.model("Role", roleSchema);

export default Role;