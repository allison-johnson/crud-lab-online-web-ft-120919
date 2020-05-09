import React, { Component } from 'react';

class Review extends Component {
  constructor(props) {
    super(props)
  }//constructor

  handleClick = (event) => {
    //console.log("props in Review.js handleClick: ", this.props)
    this.props.deleteReview(this.props.review)
  }//handleClick

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={event => this.handleClick(event)}> X </button>
      </div>
    );
  }

};

export default Review;
