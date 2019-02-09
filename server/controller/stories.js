const db = require('../db/connection');

const getStories = async (req, res, next) => {
  const connection = await db.getConnection();
  const [results] = await connection.query('select * from stories');

  res.json(results);
}

const saveStory = async (req, res, next) => {
  // get parameters
  const { title, text } = req.body;

  // save story in database
  const connection = await db.getConnection();
  const insertStoryQuery =
    'insert into stories (title, summary) values (?, ?)';
  const [storyResults] = await connection.query(insertStoryQuery, [
    title,
    text.slice(0, 10)
  ]);
  const storyId = storyResults.insertId;

  // save first page in database
  const insertPageQuery =
    'insert into pages (name, text, story_id) values (?, ?, ?)';
  const [pageResults] = await connection.query(insertPageQuery, [
    title,
    text,
    storyId
  ]);
  const pageId = pageResults.insertId;

  // return story id / story object
  res.json({ storyId, pageId });
}

module.exports = {
  getStories,
  saveStory
}