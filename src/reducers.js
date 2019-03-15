import { CHANGE_SEARCH_FIELD } from './constants';

// initial state cua toan app
const initialState = {
    searchField: ''
}

// Reducer
export const searchRobots = (state = initialState, action = {}) => {
    console.log(action.type)
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
    
        default:
            return state
    }
}