const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Contact name is required"],
        trim: true,
        min: [3, "To short (min 3char)"],
        max: [30, "To long (max 30char)"],
    },
    email: {
        type: String,
        trim: true,
        default: "",
    },
    avatar: {
        type: String,
        required: [true, "Contact's photo is required"],
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: [true, "Contact number is required"],
        trim: true,
    },
    address: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Resturant",
        type: String,
        required: [true, "Contact address is required"],
        trim: true,
    },
});

const ContactModel =
    mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
export default ContactModel;
