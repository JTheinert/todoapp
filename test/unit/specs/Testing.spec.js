import Testing from '../../../src/components/testing.vue'
import { mount } from '@vue/test-utils'

describe('Testing.vue', () => {
  let wrapper = {}

  beforeEach(() => {
    wrapper = mount(Testing)
  })

  test('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })

  test('function has been called', () => {
    let wrapper = mount(Testing, {
      propsData: {
        count: 0
      }
    })
    const increment = jest.fn()

    wrapper.setMethods({
      increment: increment
    })
    wrapper.find('button').trigger('click')

    expect(increment).toHaveBeenCalled()
  })
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
