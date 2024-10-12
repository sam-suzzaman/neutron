import ContactModel from "@/model/ContactModel";
import FavouriteContactsModel from "@/model/FavouriteContactsModel";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

// Get full favourite Contact list
export async function GET(res) {
    try {
        await connectDB();

        const contacts = await FavouriteContactsModel.find({}).populate(
            "contact_id"
        );

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
