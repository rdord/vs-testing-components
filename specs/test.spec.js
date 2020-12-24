import TestComponent from '@/test';
import { mount, shallowMount } from '@vue/test-utils';
import List from '@/list';

test('first spec', () => {
  const wrapper = mount(TestComponent, {
    propsData: { value: 'my value' }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('ListComponent shallow', () => {
  console.log(mount(List).html());
  console.log(shallowMount(List).html());
});
