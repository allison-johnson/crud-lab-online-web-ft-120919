import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurant.id} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={this.props.restaurant.id} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.reviews }
}//mapStateToProps

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: payload => dispatch({type: 'ADD_REVIEW', text: payload.text, restaurantId: payload.restaurantId}),
    deleteReview: payload => dispatch({type: 'DELETE_REVIEW', id: payload.id})
  }
}//mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
