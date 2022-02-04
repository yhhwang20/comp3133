import mongoose from 'mongoose';

const RestaurantsSchema = new mongoose.Schema({
    address: [{
        building: { type: String, required: true },
        street: { type: String, required: true },
        zipcode: { type: String, required: true }

    }],
    city: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    restaurant_id: {
        type: String,
        required: true
    }
});

const Restaurant = mongoose.model("Restaurant", RestaurantsSchema);

export default Restaurant;
