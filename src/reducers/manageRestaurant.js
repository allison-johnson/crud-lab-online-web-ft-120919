import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  //console.log("action in reducer: ", action)

  switch(action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = {text: action.text.text, id: cuid()}
      return {...state, restaurants: [...state.restaurants, newRestaurant]}

    case 'DELETE_RESTAURANT':
      return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }
    
    case 'ADD_REVIEW':
      const newReview = {text: action.text, restaurantId: action.restaurantId, id: cuid()}
      console.log("newReview: ", newReview)
      return {...state, reviews: [...state.reviews, newReview]}

    default:
      return state 
  }//switch
}//manageRestaurants
