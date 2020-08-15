/*
 * @Descripttion:
 * @version:
 * @Author: luohongwen
 * @Date: 2020-07-15 12:47:59
 * @LastEditTime: 2020-07-17 12:48:58
 */
import axios from 'axios';
export default {
    sum(a, b) {
        return a + b;
    },
    getAuthor() {
        return {
            name: 'LITANGHUI',
            age: 24,
        }
    },
    getIntArray(num) {
        if (!Number.isInteger(num)) {
            throw Error('"getIntArray"只接受整数类型的参数');
        }

        let result = [];
        for (let i = 0, len = num; i < len; i++) {
            result.push(i);
        }

        return result;
    },
    fetchUser() {
        return axios.get('http://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(error => console.log(error));
    }
}