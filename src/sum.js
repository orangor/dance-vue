/*
 * @Descripttion:
 * @version:
 * @Author: luohongwen
 * @Date: 2020-07-15 12:47:59
 * @LastEditTime: 2020-07-15 12:48:37
 */
import axios from 'axios';
export default {
    sum(a, b) {
        return a + b;
    },
    fetchUser() {
        return axios.get('http://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(error => console.log(error));
    }
}