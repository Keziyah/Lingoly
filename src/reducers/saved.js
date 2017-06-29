import { GET_SPEECHES } from '../actions';

const initialState = {
    speeches: []
}

const saved = (state = initialState, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
            case GET_SPEECHES:
            newState.speeches = action.payload;
            break; 
        default:
            return state
    }

    return newState
}

export default saved;