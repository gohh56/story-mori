import Vue from 'vue'
import Router from 'vue-router'
import StoryList from './views/StoryList.vue'
import StoryCreate from './views/StoryCreate.vue'
import Page from './views/Page.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'storyList',
      component: StoryList
    },
    {
      path: '/stories/new',
      name: 'storyCreate',
      component: StoryCreate
    },
    {
      path: '/stories/:storyId/pages/:pageId',
      name: 'storyPage',
      component: Page
    }
  ]
})
