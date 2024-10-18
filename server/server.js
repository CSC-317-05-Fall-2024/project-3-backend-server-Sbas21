import express from 'express';
import path from 'path';
import {getRestaurants, getRestaurant} from './data/restaurants.js';  // import the restaurant data
import { backendRouter } from './routes/api.js';
import { fileURLToPath } from 'url';  

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//use ejs as the view engine in express 
app.set('view engine', 'ejs');

//serves up static files from the public folder
app.use(express.static('public'));

//use router for
app.use('/api', backendRouter);

//serves up index.html file 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//serves up static files (attractions.html) from public folder
app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

//serves up new-restaurant from public/newRestaurant.html 
app.get('/new-restaurant', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'newRestaurant.html'));
});

app.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    console.log(restaurants);
    res.render('restaurants', { restaurants });
    //renders views/restaurants.ejs with data with ejs using restaurantData 
});


app.get('/restaurants', (req, res) => {
    const restaurant = getRestaurants(); // Fetch restaurant data using the function
    console.log(restaurant);
    res.render('restaurants', { restaurant });
});

app.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id); // Extract and parse the ID from the URL
    const restaurant = getRestaurant(id); // Fetch restaurant data using the function
    if (restaurant) {
        res.render('restaurant-details', { restaurant }); // Render the restaurant-details view with the restaurant data
    } else {
        res.status(404).send('Restaurant not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

