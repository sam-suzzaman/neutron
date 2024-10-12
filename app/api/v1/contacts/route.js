import ContactModel from "@/model/ContactModel";
import connectDB from "@/utils/connectDB";
import ContactValidator from "@/validator/contactValidator";
import { NextResponse } from "next/server";

// Add New Contact
export async function POST(req) {
    const payload = await req.json();
    try {
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
                message: "Operation failed",
                result: errorMsg,
            });
        }

        const isContactExists = await ContactModel.findOne({
            phoneNumber: validContact?.phoneNumber,
        });

        if (isContactExists) {
            return NextResponse.json({
                status: false,
                message: "Operation failed",
                result: "Contact already exists, try with another contact number",
            });
        }

        // saving contact
        const response = new ContactModel(validContact);
        const result = await response.save();

        return NextResponse.json({
            status: true,
            message: "Contact addedd successfully",
            result,
        });
    } catch (error) {
        // console.log(error.message);
        return NextResponse.json({
            status: false,
            message: "Operation failed",
            result: error?.message,
        });
    }
}

// Get Full Contacts list
export async function GET(res) {
    try {
        await connectDB();

        const contacts = await ContactModel.find({});

        if (!contacts.length) {
            return NextResponse.json({
                status: false,
                message: "Not found",
                result: [],
            });
        }
        return NextResponse.json({
            status: true,
            message: "Response send",
            result: contacts,
        });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({
            status: false,
            message: "Operation failed",
            result: error?.message,
        });
    }
}
