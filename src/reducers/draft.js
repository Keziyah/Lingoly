import { UPDATE_DRAFT } from '../actions';

const initialState = {
    title: "", 
    text: ""
}

const draft = (state = initialState, action) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
            case UPDATE_DRAFT:
            newState.text = action.payload;
            break; 
        default:
            return state
    }

    return newState
}

export default draft;