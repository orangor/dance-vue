/*
 * @Descripttion:
 * @version:
 * @Author: luohongwen
 * @Date: 2020-07-15 12:49:33
 * @LastEditTime: 2020-07-15 12:56:24
 */
import functions from '../src/sum';

test('sum(2 + 2) 等于 4', () => {
    expect(functions.sum(2, 2)).toBe(4);
})