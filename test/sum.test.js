/*
 * @Descripttion:
 * @version:
 * @Author: luohongwen
 * @Date: 2020-07-17 12:35:35
 * @LastEditTime: 2020-07-30 14:20:02
 */
import Vue from 'vue';
import functions from '../src/sum.js';

import { shallowMount, mount } from '@vue/test-utils'
import Counter from '../src/component/Counter.vue'

describe('Counter.vue', () => {
    it('increments count when button is clicked', async () => {
        const wrapper = shallowMount(Counter)
        wrapper.find('button').trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('div').text()).toMatch('1')
    })
})
test('renders correctly', () => {
    const wrapper = mount(Counter)
    expect(wrapper.element).toMatchSnapshot()
})

test('sum(2 + 2) 等于4', () => {
    expect(functions.sum(2, 2)).toBe(4);
})

test('sum(2, 2) 不等于 5', () => {
    expect(functions.sum(2, 2)).not.toBe(5);
})
test('getAuthor()返回的对象深度相等', () => {
    expect(functions.getAuthor()).toEqual(functions.getAuthor());
})

test('getAuthor()返回的对象内存地址不同', () => {
    expect(functions.getAuthor()).not.toBe(functions.getAuthor());
})
test('getIntArray(3)返回的数组长度应该为3', () => {
    expect(functions.getIntArray(3)).toHaveLength(3);
})
test('getIntArray(3.3)应该抛出错误', () => {
    function getIntArrayWrapFn() {
        functions.getIntArray(3.3);
    }
    expect(getIntArrayWrapFn).toThrow('"getIntArray"只接受整数类型的参数');
})

test('getAuthor().name应该包含"li"这个姓氏', () => {
    expect(functions.getAuthor().name).toMatch(/li/i);
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
