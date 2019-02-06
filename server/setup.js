const { getStories, saveStory } = require('./controller/stories');

const setup = function(app) {
  app.get('/api/stories', getStories);
  app.post('/api/stories', saveStory);
};

module.exports = setup;
