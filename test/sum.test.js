/*
 * @Descripttion:
 * @version:
 * @Author: luohongwen
 * @Date: 2020-07-16 12:42:56
 * @LastEditTime: 2020-07-16 12:45:47
 */

import functions from '../src/sum.js';

test('sum(2 + 2) 等于 4', () => {
    expect(functions.sum(2, 2)).toBe(4);
})
test('fetchUser() 可以请求到一个含有name属性值为Leanne Graham的对象', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toBe('Leanne Graham');
        });
})
test('fetchUser() 可以请求到一个用户名字为Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toBe('Leanne Graham')
})