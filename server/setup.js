const db = require('./db/connection');

const setup = function(app) {
  app.use('/api/stories', async (req, res, next) => {
    const connection = await db.getConnection();
    const [results] = await connection.query('select * from stories');

    res.json(results);
  });
};

module.exports = setup;
