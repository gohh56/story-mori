const db = require('../db/connection');

const getPage = async (req, res, next) => {
  // get parameters
  const { storyId, pageId } = req.params;
  const connection = await db.getConnection();
  const query = 'select id, name, text from pages where id = ?';
  const [results] = await connection.query(query, [pageId]);

  const childrenQuery = 'select id, name from pages where parent = ?';
  const [children] = await connection.query(childrenQuery, [pageId]);

  results[0].children = children;

  res.json(results[0]);
}

const savePage = async (req, res, next) => {
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
  getPage,
  savePage,
}