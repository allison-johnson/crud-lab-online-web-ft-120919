import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { restaurant } = this.props;
    console.log("restaurant in Restaurant: ", restaurant)
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={event => this.props.deleteRestaurant(restaurant.id)}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
