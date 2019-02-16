const db = require('../db/connection');

const getPage = async (req, res, next) => {
  // get parameters
  const { storyId, pageId } = req.params;
  const connection = await db.getConnection();
  const query = 'select id, name, text from pages where id = ?';
  const [results] = await connection.query(query, [pageId]);

  const childrenQuery = 'select id, name from pages where parent_id = ?';
  const [children] = await connection.query(childrenQuery, [pageId]);

  results[0].children = children;

  res.json(results[0]);
};

/**
 * POST /api/stories/:storyId/pages/:parentId/next
 * 
 * @apiParam {Number} storyId The story id 
 * @apiParam {Number} parentId The parent page id 
 * @apiParam {String} name The page name 
 * @apiParam {String} text The page text
 */
const savePage = async (req, res, next) => {
  // get parameters
  const { storyId, parentId } = req.params;
  const { name, text } = req.body;

  // save page in database
  const connection = await db.getConnection();
  const insertPageQuery = 'insert into pages (name, text, story_id, parent_id) values (?, ?, ?, ?)';
  const [pageResults] = await connection.query(insertPageQuery, [
    name,
    text,
    storyId,
    parentId,
  ]);
  const id = pageResults.insertId;

  // return page id
  res.json({ id });
};

module.exports = {
  getPage,
  savePage
};
