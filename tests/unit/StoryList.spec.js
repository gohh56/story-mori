import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import StoryList from '@/views/StoryList.vue';

describe('StoryList', () => {
  test('should render content correctly', () => {
    const wrapper = shallowMount(StoryList, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
  });
});
