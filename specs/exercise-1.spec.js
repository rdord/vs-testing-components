import UserList from '@/exercise-1';
import { mount } from '@vue/test-utils';
import { name } from 'faker';

function getRandomUsers(amount = 1) {
  return Array.from({ length: amount }, () => name.findName());
}

test('component renders the user', () => {
  const wrapper = mount(UserList, {
    propsData: {
      users: [name.findName()]
    }
  });

  const li = wrapper.find('li');
  expect(li.text()).toBe(wrapper.props('users')[0]);
});

test('component renders three user', async () => {
  const wrapper = mount(UserList, {
    propsData: {
      users: getRandomUsers(3)
    }
  });
  const filterInput = wrapper.find('input');
  const listItems = wrapper.findAll('li');
  expect(listItems.length).toBe(3);

  await wrapper.vm.$nextTick(() => {
    for (let i = 0; i < listItems.length; i++) {
      expect(listItems.at(i).text()).toBe(wrapper.props('users')[i]);
    }
  });

  const pickedName = listItems.at(1).text();
  filterInput.setValue(pickedName);

  await wrapper.vm.$nextTick(() => {
    const listItems = wrapper.findAll('li');
    expect(listItems.length).toBe(1);
  });

  await wrapper.vm.$nextTick(() => {
    expect(listItems.at(0).text()).toBe(wrapper.props('users')[0]);
  });
});
