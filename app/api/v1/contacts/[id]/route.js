import ContactModel from "@/model/ContactModel";
import FavouriteContactsModel from "@/model/FavouriteContactsModel";
import connectDB from "@/utils/connectDB";
import ContactValidator from "@/validator/contactValidator";
import { NextResponse } from "next/server";
const mongoose = require("mongoose");

// Update a Contact
export async function PUT(req, content) {
    const id = content.params.id;
    const payload = await req.json();

    if (!payload || Object.keys(payload).length === 0) {
        return NextResponse.json({
            status: false,
            message: "Operation failed",
            result: "No data provided to update the contact",
        });
    }

    try {
        // ID validation
        if (!mongoose.isValidObjectId(id)) {
            return NextResponse.json({
                status: false,
                message: "Update failed",
                result: "Invalid contact ID",
            });
        }

        await connectDB();

        // validating
        const { error, value: validContact } = ContactValidator.validate(
            payload,
            {
                abortEarly: false,
                errors: {
                    wrap: { label: "" },
                },
            }
        );

        if (error) {
            // rearrange error message
            let errorMsg = "";
            error?.details?.forEach((err) => {
                errorMsg += err.message + ", ";
            });
            return NextResponse.json({
                status: false,
                message: "Update failed",
                result: errorMsg,
            });
        }

        // finally update
        const result = await ContactModel.findOneAndUpdate(
            { _id: id },
            payload
        );

        if (!result) {
            return NextResponse.json({
                status: false,
                message: "Contact update failed",
                result: null,
            });
        } else {
            const updatedContact = await ContactModel.findOne({ _id: id });
            return NextResponse.json({
                status: true,
                message: "Contact updated succssfully",
                result: updatedContact,
            });
        }
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({
            status: false,
            message: "Operation failed",
            result: error?.message,
        });
    }
}

// Delete a Contact
export async function DELETE(req, content) {
    const id = content.params.id;
    try {
        // ID validation
        if (!mongoose.isValidObjectId(id)) {
            return NextResponse.json({
                status: false,
                message: "Operation failed",
                result: "Invalid contact ID",
            });
        }

        await connectDB();

        // Check if the contact exists in the favourite list
        const favContact = await FavouriteContactsModel.findOne({
            contact_id: id,
        });

        if (favContact) {
            // delete it first
            await FavouriteContactsModel.deleteOne({ contact_id: id });
        }

        // finally delete the main contact
        const result = await ContactModel.deleteOne({ _id: id });

        if (result?.deletedCount == 0) {
            return NextResponse.json({
                status: false,
                message: "Delete failed",
                result: "Contact not found",
            });
        } else {
            return NextResponse.json({
                status: true,
                message: "Contact delete successfully",
                result,
            });
        }
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({
            status: false,
            message: "Operation failed",
            result: error?.message,
        });
    }
}
