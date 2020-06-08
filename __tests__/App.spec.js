import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('test', () => {
  it('has default structure', () => {
    const wrapper = mount(App)

    expect(wrapper.find('.hello').exists()).toBe(true)
  })

  it('loads dynamic import', () => {
    const wrapper = mount(App)

    expect(wrapper.find('.hello').exists()).toBe(true)
  })
})
