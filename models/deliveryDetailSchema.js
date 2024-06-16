import mongoose from 'mongoose';

const deliveryDetailSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    postalCode: {
        type: Number,
        required: true,
    },
    townCity: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    useBillingAddress: {
        type: Boolean,
        required: true,
    },
});

const DeliveryDetail = mongoose.model('DeliveryDetail', deliveryDetailSchema);

export default DeliveryDetail;
