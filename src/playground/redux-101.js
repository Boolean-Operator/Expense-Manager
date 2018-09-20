import { createStore } from 'redux';

// Action generators - functions that return action objects

//incrementCount
const incrementCount = ({ incrementBy = 1, message = "Incr" } = {}) => ({
  type: 'INCREMENT',
  message: message,
  incrementBy: incrementBy 
});

//decrementCount
const decrementCount = ({decrementBy = 1, message = "Decr"} = {}) => ({
  type: 'DECREMENT',
  message: message,
  decrementBy: decrementBy
});

//setCount
const setCount = ({count, message = 'Set'} = {}) => ({
  type: 'SET',
  message: message,
  count: count
});

//resetCount
const resetCount = () => ({
  type: 'RESET'
});


//  Reducers -
//  1. Reducers are pure functions
//  2. Never change state or action 

const countReducer = (state = { count: 0, message: "M"}, action) => {
  switch (action.type) {
    
    case 'INCREMENT':
      return {
        message: action.message,  
        count: state.count + action.incrementBy
        };
    case 'DECREMENT':
      return {
        message: action.message,
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        message: action.message,
        count: action.count
      }
    case 'RESET' :
      return {
        message: 'Resetting Count',
        count: 0
      };
    default:
      return state;
  };
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


console.log(store.getState());

store.dispatch(incrementCount());

store.dispatch(incrementCount({
  incrementBy: 7,
  message: `Increasing Count`
}));

store.dispatch(resetCount());

store.dispatch(setCount({
  
}));

store.dispatch(setCount({
  count: 101,
  message: 'Setting Count'  
}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({
  decrementBy: 10,
  message: "Decrease Count"
}));

unsubscribe;
