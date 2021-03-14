import { shallowMount } from '@vue/test-utils'
import Sum from '@/components/Sum.vue'

describe('FAILS Sum.vue', () => {
  it('FAILS adds numbers from 2 inputs in real-time', () => {
    const nb1 = 1
    const nb2 = 1
    const result = 2
    const wrapper = shallowMount(Sum)
    wrapper.vm.nb1 = nb1
    wrapper.vm.nb2 = nb2
    const actualResult = wrapper.find('.resultOfSum').text()
    expect(parseFloat(actualResult)).toBe(result)
  })
})
