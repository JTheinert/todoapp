import { mount, createLocalVue } from '@vue/test-utils'
import Overview from '@/src/Components/Overview.vue'

import Vuex from 'vuex'
import { store } from '@/store'
import routerLink from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Overview.vue', () => {
  test('Test', () => {
    expect(true).toBe(true)
  })
  test('function has been called', () => {
    const wrapper = mount(Overview, { localVue, store, routerLink })

    const openModal = jest.fn()

    wrapper.setMethods({
      openModal: openModal
    })
    wrapper.vm.$nextTick()
    wrapper.find('button.delete-button').trigger('click')

    expect(openModal).toHaveBeenCalled()
  })

  // const wrapper = mount(Overview)
  // it('has a button', () => {
  //     expect(wrapper.contains('header')).toBe(true)
  //   })

  test('Title ?', () => {
    const wrapper = mount(Overview, { localVue, store, routerLink })
    expect(wrapper.text()).toContain('cool')
  })

  test('All ?', () => {
    const wrapper = mount(Overview, { localVue, store, routerLink })
    expect(wrapper.text()).toContain('All')
  })

  test('in Progress ?', () => {
    const wrapper = mount(Overview, { localVue, store, routerLink })
    expect(wrapper.text()).toContain('in Progress')
  })

  test('Done ?', () => {
    const wrapper = mount(Overview, { localVue, store })
    expect(wrapper.text()).toContain('Done')
  })
  test('renders correctly', () => {
    const wrapper = mount(Overview, { store, localVue, routerLink })
    expect(wrapper.element).toMatchSnapshot()
  })
})
