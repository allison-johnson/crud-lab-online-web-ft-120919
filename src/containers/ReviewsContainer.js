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
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant} />
        <Reviews />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.reviews }
}//mapStateToProps

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: payload => dispatch({type: 'ADD_REVIEW', text: payload.text, restaurantId: payload.restaurantId})
  }
}//mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
