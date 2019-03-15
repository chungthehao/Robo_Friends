import { CHANGE_SEARCH_FIELD } from './constants';

// action
export const setSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})