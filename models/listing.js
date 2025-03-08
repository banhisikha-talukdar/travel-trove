const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String,
    },
    // image: {
    //     type: String,
    //     default: "https://www.istockphoto.com/photo/the-scenery-and-mountains-of-phewa-lake-at-sunset-from-lakeside-in-pokhara-nepal-gm1627208972-532172578?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fno-image&utm_medium=affiliate&utm_source=unsplash&utm_term=no+image%3A%3A%3A",
    //     set: (v) => v === "" ? "https://www.istockphoto.com/photo/the-scenery-and-mountains-of-phewa-lake-at-sunset-from-lakeside-in-pokhara-nepal-gm1627208972-532172578?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fno-image&utm_medium=affiliate&utm_source=unsplash&utm_term=no+image%3A%3A%3A" : v,
    // },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
