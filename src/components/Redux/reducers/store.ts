import * as types from '../actions/index';
import { configAction } from '../actions/configAction';
import {StoreJson} from '../../Types/store';

interface StoreState {
    companys: StoreJson | any[],
    isLoaded: boolean,
    error: any
}
export const initStore: StoreState = {
    companys: [],
    isLoaded: false,
    error: null
}

const storeReducer = (state = initStore, action: configAction) => {
    switch (action.type) {
        case types.LOAD_STORE_SUCCESS:
            return {
                ...state,
                isLoaded: false,
                companys: action.payload.companys,
            };
        case types.LOAD_STORE_ERROR:
            return {
                ...state,
                error: action.payload.error,
                isLoaded: false
            };
        case types.LOAD_STORE:
            return {
                ...state,
                isLoaded: true,
                error: null
            }
        default:
            return state;
    }
}
export default storeReducer;