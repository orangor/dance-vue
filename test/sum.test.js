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