import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {
  constructor(props) {
    super(props)
    //console.log("props in Restaurant: ", props)
  }

  render() {
    const { restaurant } = this.props;
    console.log("restaurant in Restaurant: ", restaurant)
    return (
      <div>
        <li>
          {restaurant.text}
          <button> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
