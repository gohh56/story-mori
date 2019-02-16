const { getStories, saveStory } = require('./controller/stories');
const { getPage, savePage } = require('./controller/pages');

const setup = function(app) {
  app.get('/api/stories', getStories);
  app.post('/api/stories', saveStory);
  app.get('/api/stories/:storyId/pages/:pageId', getPage);
  app.post('/api/stories/:storyId/pages/:parentId/next', savePage);
};

module.exports = setup;
