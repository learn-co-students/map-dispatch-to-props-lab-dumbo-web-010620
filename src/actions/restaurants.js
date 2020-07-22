// their code
// this is an action creator (a function)
export const addRestaurant = (restaurant) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};







// my code 
// added default keyword and switched from arrow to regular function
// export default function addRestaurant (restaurant) {
//   return {
//     type: 'ADD_RESTAURANT',
//     restaurant
//   };
// };
