import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  constructor(props) {
    super(props)
  }

  renderRestaurants = () => {
    return this.props.restaurants.map(restaurant => <li><Restaurant restaurant={restaurant}/></li>)
  }

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

export default Restaurants;