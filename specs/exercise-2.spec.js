import ExerciseForm from '@/exercise-2';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';

test('follow the user through the form', async () => {
  const wrapper = mount(ExerciseForm);
  expect(wrapper).toMatchSnapshot();

  const form = wrapper.find('form');
  const input = form.find('input');

  input.setValue('buy bread');
  form.trigger('submit');

  await nextTick();
  expect(wrapper).toMatchSnapshot();

  const li = wrapper.find('ul').find('li');
  const doneButton = li.find('button');
  doneButton.trigger('click');

  await nextTick();
  expect(wrapper).toMatchSnapshot();
});
