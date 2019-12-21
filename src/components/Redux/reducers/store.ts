import * as types from '../actions/index';
import { configAction } from '../actions/configAction';
import Store from '../../Types/store';

interface StoreState {
    companys: Store | any[],
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
        case types.GET_STORE:
            return {
                ...state,
                companys: action.payload.datas,
                isLoaded: true
            };
        case types.LOAD_STORE_SUCCESS:
            return {
                ...state,
            };
        case types.LOAD_STORE_ERROR:
            return {
                ...state,
            };
        case types.LOAD_STORE_LOADING:
            return {
                ...state,
            }
        default:
            return state;
    }
}
export default storeReducer;