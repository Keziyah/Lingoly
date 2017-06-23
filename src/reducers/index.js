import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recorder from './recorder'

const Reducers = combineReducers({
    recorder,
    routing: routerReducer
});

export default Reducers;
