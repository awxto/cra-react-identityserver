import * as React from 'react';
import * as CounterStore from '../store/Counter';
import { connect } from 'react-redux';

const Counter = props => {
  return (
    <div className='container'>
      <h2>Counter</h2>
      <p>This is a simple example of a redux connected React component.</p>
      <p>
        Current count: <strong>{props.count}</strong>
      </p>
      <button
        className='btn btn-primary btn-sm'
        onClick={() => {
          props.increment();
        }}
      >
        Increment
      </button>
      <button
        className='btn btn-primary btn-sm mx-1'
        onClick={() => {
          props.decrement();
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default connect(
  // Selects which state properties are merged into the component's props
  state => state.counter,
  // Selects which action creators are merged into the component's props
  CounterStore.actionCreators
)(Counter);
