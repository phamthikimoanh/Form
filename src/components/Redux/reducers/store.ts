import * as types from '../actions/index';
import { configAction } from '../actions/configAction';
import Store from '../../Types/store';

interface StoreState {
<<<<<<< HEAD
    companys: Store | null
}
export const initStore: StoreState = {
    companys: null,
=======
    companys: Store | any[],
    isLoaded: boolean,
    error: any
}
export const initStore: StoreState = {
    companys: [],
    isLoaded: false,
    error: null
>>>>>>> master
}

const storeReducer = (state = initStore, action: configAction) => {
    switch (action.type) {
        case types.GET_STORE:
            return {
                ...state,
<<<<<<< HEAD
                companys: action.payload
=======
                companys: action.payload.datas,
                isLoaded: true
>>>>>>> master
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