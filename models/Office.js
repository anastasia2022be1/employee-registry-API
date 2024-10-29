import mongoose from "mongoose";

const Schema = mongoose.Schema;

const officeSchema = new Schema({
    streetNameAndNumber: { type: String, required: true },
    areaCode: { type: String, required: true },
    city: { type: String, required: true }
})

const Office = mongoose.model("Office", officeSchema);

export default Office;