/*
 * @Descripttion:
 * @version:
 * @Author: luohongwen
 * @Date: 2020-07-17 12:35:35
 * @LastEditTime: 2020-08-07 17:20:29
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import functions from '../src/sum.js';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Counter from '../src/component/Counter.vue'
import ChildComponent from '../src/component/Dance.vue'
import ParentComponent from '../src/component/App.vue'
import Foo from '../src/component/Foo.vue'
import testButton from '../src/component/testButton.vue'
import keyDown from '../src/component/keyDown.vue'
import mocks from '../src/component/mock.vue'
import sinon from 'sinon'
import flushPromises from 'flush-promises'
import VueRouter from 'vue-router'
/*
describe('Counter.vue', () => {
    it('increments count when button is clicked', async () => {
        const wrapper = shallowMount(Counter)
        wrapper.find('button').trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('div').text()).toMatch('1')
    })
})

describe('Conter', () => {
    it('renders a div-color', () => {
        const wrapper = mount(Counter, {
            propsData: {
                color: 'red'
            }
        })
        expect(wrapper.props().color).toBe('red')
    })
})
describe('Conter', () => {
    const wrapper = mount(Counter)
    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<span class="count">0</span>')
    })
    //检查已存在的元素
    it('has a button', () => {
        expect(wrapper.contains('button')).toBe(true)
    })
    it("模拟按钮", async () => {
        expect(wrapper.vm.count).toBe(0)
        const button = wrapper.find('button')
        await button.trigger('click')
        expect(wrapper.text()).toContain('1')
    })
})

describe('ParentComponent父子组件', () => {
    it("displays 'Emitted!' when custom event is emitted", async () => {
        const wrapper = mount(ParentComponent)
        wrapper.find(ChildComponent).vm.$emit('custom')
        // wrapper.setData({ emitted: true })
        //  expect(wrapper.vm.emitted).toBe(true)
        await wrapper.vm.$nextTick()
        expect(wrapper.html()).toContain('Emitted!')
    })
})

const transitionStub = () => ({
    render: function (h) {
        return this.$options._renderChildren
    }
})


test('should render Foo, then hide it', async () => {
    const wrapper = mount(Foo, {
        stubs: {
            transition: transitionStub()
        }
    })
    expect(wrapper.text()).toMatch(/Foo/)

    wrapper.setData({
        show: false
    })
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).not.toMatch(/Foo/)
})
test('should render Foo', async () => {
    const wrapper = mount(Foo, {
        data() {
            return {
                show: true
            }
        }
    })
    expect(wrapper.text()).toMatch(/Foo/)
})

test('should not render Foo', async () => {
    const wrapper = mount(Foo, {
        data() {
            return {
                show: false
            }
        }
    })
    expect(wrapper.text()).not.toMatch(/Foo/)
})

const $route = {
    path: '/',
    hash: '',
    params: { id: '123' },
    query: { q: 'hello' }
}
mount(Foo, {
    mocks: {
        $route
    }
})
*/
describe('Click event', () => {
    it('Click on yes button calls our method with argument "yes"', () => {
        const spy = sinon.spy()
        const wrapper = mount(testButton, {
            propsData: {
                callMe: spy
            }
        })
        wrapper.find('button.yes').trigger('click')


        expect(spy.calledWith('yes')).toBe(true)
    })
})

describe('Key event tests', () => {
    it('Quantity is zero by default', () => {
        const wrapper = mount(keyDown)
        expect(wrapper.vm.quantity).toBe(0)
    })

    it('Up arrow key increments quantity by 1', () => {
        const wrapper = mount(keyDown)
        wrapper.trigger('keydown.up')
        expect(wrapper.vm.quantity).toBe(1)
    })
    it('Down arrow key decrements quantity by 1', () => {
        const wrapper = mount(keyDown)
        wrapper.vm.quantity = 5
        wrapper.trigger('keydown.down')
        expect(wrapper.vm.quantity).toBe(4)
    })

    it('Escape sets quantity to 0', () => {
        const wrapper = mount(keyDown)
        wrapper.vm.quantity = 5
        wrapper.trigger('keydown.esc')
        expect(wrapper.vm.quantity).toBe(0)
    })

    it('Magic character "a" sets quantity to 13', () => {
        const wrapper = mount(keyDown)
        wrapper.trigger('keydown', {
            key: 'a'
        })
        expect(wrapper.vm.quantity).toBe(13)
    })
})
jest.mock('axios', () => ({
    get: Promise.resolve('value')
}))

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

shallowMount(mocks, {
    localVue,
    router
})
shallowMount(mocks, {
    stubs: ['router-link', 'touter-view']
})

const $route = {
    path: '/some/path'
}
const wrapper = shallowMount(mocks, {
    mocks: {
        $route
    }
})
wrapper.vm.$route.path