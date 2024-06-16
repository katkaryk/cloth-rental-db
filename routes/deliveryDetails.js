import express from 'express';
import DeliveryDetail from '../models/deliveryDetailSchema.js';

const router = express.Router();

// GET all delivery details
router.get('/', async (req, res) => {
    try {
        const deliveryDetails = await DeliveryDetail.find();
        res.json(deliveryDetails);
        console.log("Fetched all delivery details");
    } catch (err) {
        res.status(500).send('Error from get request: ' + err.message);
    }
});

// POST a new delivery detail
router.post('/', async (req, res) => {
    const deliveryDetails = new DeliveryDetail({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        streetAddress: req.body.streetAddress,
        postalCode: req.body.postalCode,
        townCity: req.body.townCity,
        phoneNumber: req.body.phoneNumber,
        useBillingAddress: req.body.useBillingAddress,
    });
    try {
        const savedDeliveryDetail = await deliveryDetails.save();
        res.status(201).json(savedDeliveryDetail); // Return the saved document with 201 status code
        console.log("New delivery detail added");
    } catch (err) {
        res.status(500).send('Error from post request: ' + err.message);
    }
});

export default router;
