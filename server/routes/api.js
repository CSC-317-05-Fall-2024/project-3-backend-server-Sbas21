import express from 'express';
const router = express.Router();

import { getRestaurants, getRestaurant, createRestaurant,deleteRestaurant } from '../data/restaurants.js';

// Add routes here
router.post('/restaurants', (req, res) => { //POST endpoint for creating a new restaurant
    const restaurantData = req.body;    // extract restaurant data from the request body
    //console.log(restaurantData);
    try {
        const newRestaurant = createRestaurant(restaurantData); //creating a new restaurant obj 
        res.status(201).json(newRestaurant); 
    } catch (error) {   
        console.error(error);
        res.status(500).json({ "message": `${error}` });
    }
});

router.get('/restaurants', (req, res) => {      //API routing for /api/restaurants
    const restaurants = getRestaurants(); // fetching restaurant data 
    res.render('restaurants', { restaurants }); // rendering restaurant ejs file
});

router.get('/restaurants/:id', (req, res) => {  // GET endpoint to fetch a restaurant by it's ID
    const id = parseInt(req.params.id);
    try {
        const restaurant = getRestaurant(id);   // fetches a specific restaurant using getRestaurant function
        res.render('restaurant-details', { restaurant }); // render the EJS view directly with the restaurant variable
    } catch (error) {
        console.error(error);
        res.status(500).json({ "message": `${error.message}` });
    }
});

// DELETE endpoint to deleting a restaurant by id 
router.delete('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const restaurant = deleteRestaurant(id);    // delete the restaurant using deleteRestaurant function
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({ "message": `${error}` });
    }
});

export {router as backendRouter};   