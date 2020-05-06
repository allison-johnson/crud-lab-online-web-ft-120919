import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = {text: action.payload, id: cuid()}
      return {...state, restaurants: [...state.restaurants, newRestaurant]}

    default:
      return state 
  }//switch
}//manageRestaurants
