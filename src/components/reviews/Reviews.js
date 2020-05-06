import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  constructor(props) {
    super(props)
    console.log("props in Reviews: ", props)
  }

  renderReviews() {
    return(this.props.reviews && this.props.reviews.map(review => <Review review={review} />))
  }

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;