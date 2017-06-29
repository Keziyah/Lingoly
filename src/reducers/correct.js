import { CORRECT_GRAMMAR } from '../actions';

const initialState = {
    correctedText: []
}

const correct = (state = initialState, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
            case CORRECT_GRAMMAR:
            newState.correctedText = action.payload;
            break; 
        default:
            return state
    }

    return newState
}

export default correct;