import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  constructor(props) {
    super(props)
  }

  // renderRestaurants = () => {
  //   let restaurantList = this.props.restaurants.map(restaurant => <li><Restaurant restaurant={restaurant}/></li>)
  // }

  render() {
    console.log("this.props.restaurants in Restaurants: ", this.props.restaurants)
    let restaurantList = this.props.restaurants.map(restaurant => {
      return (
        <Restaurant restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>
      )
    })

    return(
      <ul>
        {restaurantList}
      </ul>
    );
  }
};

export default Restaurants;