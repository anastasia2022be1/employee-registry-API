import mongoose from "mongoose";

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    streetName: { type: String, required: true },
    streetNumber: { type: String, required: true },
    areaCode: { type: Number, required: true },
    city: { type: String, required: true }
});

const Address = mongoose.model("Address", addressSchema);

export default Address;