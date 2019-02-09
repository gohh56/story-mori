const db = require('../db/connection');

const getPage = async (req, res, next) => {
  const { storyId, pageId } = req.params;
  const connection = await db.getConnection();

  // Get current page and story
  const currentPageQuery =
    'select s.id as storyId, s.title as storyTitle, p.id as id, p.name as name, p.text as text, p.parent as parent from stories s inner join pages p on s.id = p.story_id where s.id = ? and p.id = ?';
  const [currentPageResults] = await connection.query(currentPageQuery, [
    storyId,
    pageId
  ]);
  const currentPage = currentPageResults[0];
  // TODO handle not found

  // Get children pages name and ids
  const nextPageQuery = 'select id, name from pages where parent = ?';
  const [nextPages] = await connection.query(nextPageQuery, [pageId]);

  res.json({ ...currentPage, children: nextPages });
};

const savePage = async (req, res, next) => {
  const { storyId, pageId } = req.params;
  const { name, text } = req.body;
  const connection = await db.getConnection();

  const insertPageQuery =
    'insert into pages (name, text, story_id, parent) values (?, ?, ?, ?)';
  const [pageResults] = await connection.query(insertPageQuery, [
    name,
    text,
    storyId,
    pageId
  ]);
  const newPageId = pageResults.insertId;

  res.json({ pageId: newPageId });
};

module.exports = {
  getPage,
  savePage
};
