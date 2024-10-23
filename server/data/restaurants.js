let restaurantData = [      //data array initialization 
    {
        id: 0,
        name: "Nasi Kandar Pelita",
        phone: "+60 3-2162 5532",
        address: "149, Jalan Ampang, 50450 Kuala Lumpur",
        photo: "/images/nkp.jpg"
    },
    {
        id: 1,
        name: "Betel Leaf",
        phone: "+60 3-2032 5932",
        address: "77a, Leboh Ampang, Kuala Lumpur",
        photo: "/images/betelLeaf.jpeg"
    },
    {
        id: 2,
        name: "Bottega KL",
        phone: "+603-2070 4222",
        address: "1A, Jalan Ceylon, Bukit Ceylon, Kuala Lumpur",
        photo: "/images/BottegaKL.png"
    },
    {
        id: 3,
        name: "Ho Kow Kopitiam",
        phone: "+60 3-2022 1889",
        address: "1 Jalan Balai Polis, Kuala Lumpur",
        photo: "/images/hoKowKopitiam.jpg"
    },
    {
        id: 4,
        name: "Cendol Durian",
        phone: "+60 19-262 7672",
        address: "47B, Jalan Raja Alang, Kuala Lumpur",
        photo: "/images/cendolDurian.jpeg"
    },
    {
        id: 5,
        name: "Burger Lab",
        phone: "+60 17-282 8150",
        address: "14, Jalan 21/22, Petaling Jaya",
        photo: "/images/burgerLab.png"
    },
    {
        id: 6,
        name: "Village Park Restaurant",
        phone: "+60 3-7710 7860",
        address: "5, Jalan SS 21/37, Petaling Jaya",
        photo: "/images/villagePark.jpg"
    },
    {
        id: 7,
        name: "Wong Kee",
        phone: "+60 3-2144 3750",
        address: "30, Jalan Nyonya Pudu, Kuala Lumpur",
        photo: "/images/wongKee.jpg"
    },
    {
        id: 8,
        name: "Lim Fried", 
        phone: "+60 17-316 3287",
        address: "14, Jalan SS2/10, SS2, Petaling Jaya",
        photo: "/images/limFried.jpg"
    }
];

let currentId = restaurantData.length; //keeps track of current restaurant id  
const nextId = () => {  
    currentId += 1; //keep track of next id 
    return currentId;
};

const getRestaurants = () => {     //get a list of restaurants 
    return restaurantData;
};

const getRestaurant = (id) => { //get restaurant by its id
    return restaurantData.find(restaurant => restaurant.id === id);
};

const createRestaurant = (data) => {    //creating a new restaurant entry 
    const newRestaurant = {
        id: nextId(),   //next id for restaurant obj 
        ...data 
    };
    //console.log(data) 
    restaurantData.push(newRestaurant);     //pushes new restaurant obj into the array
    return newRestaurant;
};

const deleteRestaurant = (id) => {  //fucntion to delete a restaurant 
    const restaurantToDelete = restaurantData.find(restaurant => restaurant.id === id);
    if (!restaurantToDelete) {
        throw Error(`Restaurant with id ${id} not found!`);
    }
    //filter out the restaurant to delete from the restaurant array
    restaurantData = restaurantData.filter(restaurant => restaurant.id !== id);
    return restaurantToDelete;
};

export { createRestaurant, deleteRestaurant, getRestaurant, getRestaurants};
