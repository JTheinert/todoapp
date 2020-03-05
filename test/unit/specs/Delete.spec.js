import Delete from '@/src/Components/Delete.vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { store } from '@/store'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Delete.vue', () => {
  const wrapper = mount(Delete, {store, VueRouter})

  test('function has been called', () => {
    const wrapper = mount(Delete, {store, VueRouter})

    expect(wrapper.text()).toContain('no')
  })

  test('Delete todo Button', () => {
    const removeTodo = jest.fn()

    wrapper.setMethods({
      removeTodo: removeTodo
    })

    wrapper.find('button.btn-style-yes').trigger('click')

    expect(removeTodo).toHaveBeenCalled()
  })

  test('close modal', () => {
    const cancelDelete = jest.fn()

    wrapper.setMethods({
      cancelDelete: cancelDelete
    })

    wrapper.find('button.btn-style').trigger('click')

    expect(cancelDelete).toHaveBeenCalled()
  })
  test('renders correctly', () => {
    const wrapper = mount(Delete)
    expect(wrapper.element).toMatchSnapshot()
  })
})
