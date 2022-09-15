const db = require('../config/db');
async function getMultiple(){
  const rows = await db.query(
    `SELECT id, title, description
    FROM todo_table`
  );
  const data = rows;

  console.log(data);
  return {
    data
  }
}

module.exports = {
  getMultiple
}