import { SET_BLOB } from '../actions';

const initialState = {
    blobs: []
}

const recorder = (state = initialState, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
        case SET_BLOB:
            if (newState.blobs.length === 3) { //only show the last three audio recordings. later I will add a scroll for overflow
                newState.blobs.shift()
            }

            newState.blobs = [...newState.blobs, action.payload];       break; 
        default:
            return state
    }

    return newState
}

export default recorder;