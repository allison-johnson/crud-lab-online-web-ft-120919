import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  // constructor(props) {
  //   super(props)
  //   console.log("props in Reviews: ", props)
  // }

  renderReviews() {
    if (this.props.reviews) {
      const relevantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
      return relevantReviews.map(review => <Review review={review} deleteReview={this.props.deleteReview} />)
    }
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