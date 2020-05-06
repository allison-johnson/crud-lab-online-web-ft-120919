import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(props) {
    super(props)
    console.log("props in ReviewInput: ", this.props)
    this.state = {
      text: ''
    }
  }//constructor

  handleChange = (event) => {
    this.setState({
      text: event.target.value 
    })
  }//handleChange

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="input">Enter review: </label>
          <input type="text" name="input" value={this.state.text} onChange={event => this.handleChange(event)}></input>
          <input type="submit" value="Add Review" />
        </form>
      </div>
    );
  }//render
};

export default ReviewInput;
