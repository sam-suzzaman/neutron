import ContactModel from "@/model/ContactModel";
import FavouriteContactsModel from "@/model/FavouriteContactsModel";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";
const mongoose = require("mongoose");

// Add To Favourite Contact List
export async function POST(req, content) {
    const id = content.params.id;
    try {
        await connectDB();

        // ID validation
        if (!mongoose.isValidObjectId(id) || !id) {
            return NextResponse.json({
                status: false,
                message: "Operation failed",
                result: "Invalid contact ID",
            });
        }

        const isContactExists = await FavouriteContactsModel.findOne({
            contact_id: id,
        });

        if (isContactExists) {
            return NextResponse.json({
                status: false,
                message: "Operation failed",
                result: "Contact already in favourite list",
            });
        }

        // saving contact
        const response = new FavouriteContactsModel({ contact_id: id });
        const result = await response.save();

        return NextResponse.json({
            status: true,
            message: "Added in favourite list",
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

// Remove from Favourite Contact List
export async function DELETE(req, content) {
    const id = content.params.id;
    try {
        await connectDB();

        // ID validation
        if (!mongoose.isValidObjectId(id) || !id) {
            return NextResponse.json({
                status: false,
                message: "Operation failed",
                result: "Invalid contact ID",
            });
        }

        const isContactExists = await FavouriteContactsModel.findOne({
            contact_id: id,
        });

        if (!isContactExists) {
            return NextResponse.json({
                status: false,
                message: "Operation failed",
                result: "Contact not found in favourite list",
            });
        }

        const result = await FavouriteContactsModel.deleteOne({
            contact_id: id,
        });

        if (result?.deletedCount == 0) {
            return NextResponse.json({
                status: false,
                message: "Delete failed",
                result: "Something went wrong, try later",
            });
        } else {
            return NextResponse.json({
                status: true,
                message: "Contact removed from Favourite list",
                result,
            });
        }
    } catch (error) {
        // console.log(error.message);
        return NextResponse.json({
            status: false,
            message: "Operation failed",
            result: error?.message,
        });
    }
}
