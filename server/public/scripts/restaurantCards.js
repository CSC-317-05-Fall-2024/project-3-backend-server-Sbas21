/* This file should contain definitions for deleteRestaurantCard,
    and js to attach it as a handler per card.
*/


// function to delete the restaurant card and to pass in the index 
function deleteRestaurantCard(index) {

    //select restaurant card based on index passed in 

    const cardToDelete = document.getElementById(`restaurant-${index}`);
    //removes the restaurant card 
    cardToDelete.remove();
   
}
