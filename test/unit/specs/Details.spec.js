import Details from '@/src/Components/Details.vue'

import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { store } from '@/store'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Details.vue', () => {
  test('Test', () => {
    expect(true).toBe(true)
  })
  const wrapper = mount(Details, {store, localVue, VueRouter})

  test('Title ?', () => {
    expect(wrapper.text()).toContain('cool')
  })

  test('Close button', () => {
    expect(wrapper.text()).toContain('Close')
  })

  test('Delete button', () => {
    expect(wrapper.text()).toContain('Delete')
  })

  wrapper.vm.$nextTick()

  test('Close Details function', () => {
    const closeDetails = jest.fn()

    wrapper.setMethods({
      closeDetails: closeDetails
    })

    wrapper.find('button.close-details-button').trigger('click')

    expect(closeDetails).toHaveBeenCalled()
  })

  test('open Details modal', () => {
    const openModalDetails = jest.fn()

    wrapper.setMethods({
      openModalDetails: openModalDetails
    })

    wrapper.find('button.details-delete-button').trigger('click')

    expect(openModalDetails).toHaveBeenCalled()
  })

  test('set Filter to Progress', () => {
    const setFilterProgress = jest.fn()

    wrapper.setMethods({
      setFilterProgress: setFilterProgress
    })

    wrapper.find('input.todo-selection-progress').trigger('click')

    expect(setFilterProgress).toHaveBeenCalled()
  })

  test('set Filter to Done', () => {
    const setFilterDone = jest.fn()

    wrapper.setMethods({
      setFilterDone: setFilterDone
    })

    wrapper.find('input.todo-selection-done').trigger('click')

    expect(setFilterDone).toHaveBeenCalled()
  })
  test('renders correctly', () => {
    const wrapper = mount(Details, {store})
    expect(wrapper.element).toMatchSnapshot()
  })
})
