import { CHANGE_SEARCH_FIELD } from './constants';

// action
export const setSearchField = text => {
    console.log(text)

    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}