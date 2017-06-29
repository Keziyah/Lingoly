import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recorder from './recorder'
import draft from './draft'


const Reducers = combineReducers({
    recorder,
    draft,
    routing: routerReducer
});

export default Reducers;
