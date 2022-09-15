// config/db.js
// const mongoose = require("mongoose");

// const db = process.env.MONGO_URI;

// const connectDB = async () => {
//     try {
//         await mongoose.connect(db, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("MongoDB is connected");
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;
const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "65.21.90.199",
      user: "jgsigjap_demo",
      password: "Q;RkYjEP7En0",
      database: "jgsigjap_demo_learn",
      port: 2083

    },
    listPerPage: 10,
  };

  const mysql = require('mysql2/promise');
  
  async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);
  
    return results;
  }
  
  module.exports = {
    query
  }