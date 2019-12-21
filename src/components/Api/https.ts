import { API_URL, API_KEY } from './api';

const header = {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Api-Key': API_KEY,
};


// .then() là dùng thay thế cho async await
// 1 dùng async await để sử lý bất đồng bộ 
// 2 là dùng then() để catch kết quả return về trong call back
// const a = await https.get() <-- đây là 1 câu request điển hình
// khi đó a là giá trị được https.get() trả về
// trong trường hợp dùng async await
// return https.get('abc').then( (a) => {console.log(a)}) <-- khi đó a được dùng
// như 1 tham số và truyền vào call back để tiếp tục xử lý, lúc này k cần async await
// khuyến khích dùng async await, thích nghi trong mọi hoàn cảnh
//dùng ts thì dùng ngon ngon tí ^^


const qs = require('qs');
export default class Http {
    static async get(patch: string) {
        try {
            let pre = await fetch(API_URL + patch)
            const result = await pre.json()
            return result;
        } catch (error) {
            alert(error);
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
            alert(error);
        }
    }
}