import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

// // my code v      ALREADY ADDED ABOVE ^ BY FRIENDLY TEACHAHS
// import { connect } from 'react-redux'
// import restaurants from './actions/restaurants'

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // I don't get how we get a dispatch to pass in here as the arg
    // isn't dispatch a method located in the store object?
    // everything is just getting and setting, 
    // if you think u need it from there see how would you do that?
    // I think I'm wrong but this seems like a good exercise/question: 
    // how do I reach store from inside the RestaurantInput component? 

    // according to notes from lecture: component ––dispatch––> action –> reducer –> store –> component

    // add missing code
    this.props.addRestaurant(this.state)

    // actionObject takes whatever is in state, ie., this.state, as the newRestaurant arg
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

// my code
const mapDispatchToProps = (dispatch) => {
  // my first try:
  // let action = addRestaurant() 
  // return dispatch(action)

  // solution: 
  // ok so the return value below is what's getting merged
  // into props, so above in my code I can directly call
  // this.props.addRestaurant(this.state)
  return {
    addRestaurant: (newRestaurant) => {
      dispatch(addRestaurant(newRestaurant))
    }
  }
}


//connect this component by wrapping RestaurantInput below
export default connect(null, mapDispatchToProps)(RestaurantInput)
