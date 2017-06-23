import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import demo from './demo';
import recorder from './recorder'

const Reducers = combineReducers({
    demo,
    recorder,
    routing: routerReducer
});

export default Reducers;
