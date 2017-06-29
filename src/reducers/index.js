import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recorder from './recorder'
import draft from './draft'
import correct from './correct'



const Reducers = combineReducers({
    recorder,
    draft,
    correct,
    routing: routerReducer
});

export default Reducers;
