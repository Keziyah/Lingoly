import { FIND_WORD } from '../actions';

const initialState = {
    words: []
}

const dictionary = (state = initialState, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
            case FIND_WORD:
            newState.words = [action.payload, ...newState.words];
            break; 
        default:
            return state
    }

    return newState
}

export default dictionary;