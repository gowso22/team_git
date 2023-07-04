import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    // Dispatch an action to increment the counter
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    // Dispatch an action to decrement the counter
    this.props.dispatch({ type: 'DECREMENT' });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.props.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

// Map the Redux state to component props
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// Connect the component to Redux store
export default connect(mapStateToProps)(Counter);
