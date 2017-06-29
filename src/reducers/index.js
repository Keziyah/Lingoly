import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recorder from './recorder'
import draft from './draft'
import correct from './correct'
import saved from './saved'
import dictionary from './dictionary'



const Reducers = combineReducers({
    recorder,
    draft,
    correct,
    saved,
    dictionary,
    routing: routerReducer
});

export default Reducers;
