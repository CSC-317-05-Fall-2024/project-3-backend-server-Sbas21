import express from 'express';
const router = express.Router();

import { getRestaurants, createRestaurant,deleteRestaurant } from '../data/restaurants.js';

// Add routes here

router.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants(); // Fetch restaurant data using the function
    res.render('restaurants', { restaurants }); // Render restaurants.ejs with the data
});

export {router as backendRouter};