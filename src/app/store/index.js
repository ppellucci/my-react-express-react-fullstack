import { createStore } from 'redux';
import { defaultState } from '../../server/defaultState'

export const store = createStore(
    function reducert(state = defaultState, action) {
        return state;
    }
)