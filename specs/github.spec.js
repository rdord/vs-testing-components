import GithubCard from '@/github-card';
import { mount } from '@vue/test-utils';

describe('methods', () => {
  test('composeUrl', () => {
    const { composeUrl } = GithubCard.methods;
    expect(composeUrl(123)).toBe('https://api.github.com/users/123');
    expect(composeUrl('aaa')).toBe('https://api.github.com/users/aaa');
  });

  test('fetchData', async () => {
    const jsonMock = jest.fn().mockResolvedValue('GITHUB DATA');
    window.fetch = jest.fn().mockResolvedValue({ json: jsonMock });

    const wrapper = mount(GithubCard);
    wrapper.setData({ username: 'rdord' });

    await wrapper.vm.fetchData();

    // TEST: const response = await fetch(this.url);
    expect(window.fetch).toHaveBeenCalledWith('https://api.github.com/users/rdord');

    // TEST: this.data = await response.json();
    expect(jsonMock).toHaveBeenCalled();
    expect(wrapper.vm.data).toBe('GITHUB DATA');
  });
});
