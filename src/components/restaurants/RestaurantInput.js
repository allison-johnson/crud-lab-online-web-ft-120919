import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)
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
    this.props.addRestaurant(this.state)
    this.setState({
      text: ''
    })
  }//handleSubmit

  render() {
    return (
      <div>
        Enter a New Restaurant!
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="name">Restaurant Name: </label>
          <input type="text" name="name" value={this.state.text} onChange={event => this.handleChange(event)} />
          <input type="submit" value="Add Restaurant" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
