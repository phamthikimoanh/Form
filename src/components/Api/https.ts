import { API_URL, API_KEY } from './api';

const header = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Api-Key': API_KEY,
};

const qs = require('qs');
export default class Http {
    static async get(patch: string) {
        try {
            let pre = await fetch(API_URL + patch);
            const result = await pre.json();
            return result;
        } catch (error) {
            console.log("Lỗi load dữ liệu ", error);
        }
    }
    static async post(patch: string, data: any) {
        try {
            let res = await fetch(API_URL + patch, {
                method: "POST",
                headers: header,
                body: qs.stringify(data)
            })
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
}
