import {StoreJson} from "../../Types/store";


export const GET_STORE = "GET_STORE";
export const LOAD_STORE_ERROR = "LOAD_STORE_ERROR";
export const LOAD_STORE = "LOAD_STORE";
export const LOAD_STORE_SUCCESS = "LOAD_STORE_SUCCESS";
export const EDIT_INFO_COMPANY = "EDIT_INFO_COMPANY";


// export type Company = {
//     id: number
//     avatar: string
//     name: string
//     mst: number
//     phone: string
//     address1: string
//     address2?: string
//     name_office: string
// }

export const loadStoreError = (error: null) => ({
    type: LOAD_STORE_ERROR,
    payload: { error }
})

export const loadStore = () => ({
    type: LOAD_STORE
})

export const loadStoreSuccess = (companys: StoreJson[]) => ({
    type: LOAD_STORE_SUCCESS,
    payload: { companys }

})


//id: 1
//avatar: "http://lorempixel.com/640/480/food"
//name: "K.O.I THE"
//mst: 46133
//phone: "(938) 352-4356"
//address1: "123 Ly Tu Trong"
//address2: "23 Hailey Cape"
//name_office: "K.O.I THE International Company"
//dùng ts, please dont use any :) it is fucking stupid
// mẫu 1 lần cho m luôn