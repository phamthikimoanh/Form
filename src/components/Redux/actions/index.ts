export const GET_STORE = "GET_STORE";
export const LOAD_STORE_ERROR = "LOAD_STORE_ERROR";
export const LOAD_STORE_LOADING = "LOAD_STORE_LOADING";
export const LOAD_STORE_SUCCESS = "LOAD_STORE_SUCCESS";

export const getStore = (datas:any) =>{
    return {
        type: GET_STORE,
        payload: {datas}
    }
}

export const loadStoreError = () =>{
    return {
        type: LOAD_STORE_ERROR
    }
}

export const loadStoreLoading = () =>{
    return {
        type: LOAD_STORE_LOADING
    }
}
export const loadStoreSuccess= (data:any) =>{
    return {
        type: LOAD_STORE_SUCCESS,
    }
}