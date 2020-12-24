import TestComponent from '@/test';
import { mount, shallowMount } from '@vue/test-utils';
import List from '@/list';

test('fmount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: { value: 'my value' }
  });
  expect(wrapper).toMatchSnapshot();
});

test('ListComponent shallow', () => {
  console.log(mount(List).html());
  console.log(shallowMount(List).html());
});

test('ListComponent', async () => {
  const wrapper = mount(List);
  const movies = wrapper.vm.marvelMovies;
  await wrapper.setData({ marvelMovies: [...movies, 'Endgame'] });
  expect(wrapper).toMatchSnapshot();
});
