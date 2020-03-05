import App from '../../../src/App.vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { store } from '@/store'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App.vue', () => {
  test('Test', () => {
    expect(true).toBe(true)
  })
  test('App has a Header', () => {
    const wrapper = mount(App, {store, VueRouter, localVue})
    expect(wrapper.text()).toContain('A Vue to Do List!')
  })
  test('renders correctly', () => {
    const wrapper = mount(App)
    expect(wrapper.element).toMatchSnapshot()
  })
})
