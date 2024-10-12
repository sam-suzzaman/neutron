const mongoose = require("mongoose");

const FavouriteContactSchema = new mongoose.Schema({
    contact_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact",
    },
});

const FavouriteContactsModel =
    mongoose.models.FavouriteContact ||
    mongoose.model("FavouriteContact", FavouriteContactSchema);
export default FavouriteContactsModel;
