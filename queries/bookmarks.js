// queries/bookmarks.js
const db = require("../db/dbConfig.js");


//error message
// queries/bookmarks.js
const getAllBookmarks = async () => {
    try {
      const allBookmarks = await db.any("SELECT * FROM bookmarks");
      return allBookmarks;
    } catch (error) {
      return error;
    }
  };



module.exports = { getAllBookmarks };