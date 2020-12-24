import ListComponent from '@/list';
import { shallowMount } from '@vue/test-utils';

const ListItemStub = {
  template: `<li>{{ movie }}</li>`,
  props: ['movie']
};

test('shallowMount stub', () => {
  const wrapper = shallowMount(ListComponent, {
    stubs: {
      ListItem: ListItemStub
    }
  });
  expect(wrapper).toMatchSnapshot();
});
