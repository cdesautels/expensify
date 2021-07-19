import { createStore } from 'redux';

// Action Generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});

// Reducers
// 1. Reducers are pure functions (Does not use or change anything outside of its scope)
// 2. Never change state or action. (Never change action. For state, return the new state object, React will handle updating state from that)
const countReducer = (state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
            break;
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
            break;
        case 'SET':
            return {
                count: action.count
            }
            break;
        case 'RESET':
            return {
                count: 0
            }
            break;
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(setCount({ count: -201}));