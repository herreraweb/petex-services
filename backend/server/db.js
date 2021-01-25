const Pool = require("pg").Pool;

const pool = new Pool({
   user: "qmdskjtv",
   password:"g4td_o9J3olUJDWfejxsxAUCI1QjmmeR",
   host:"ziggy.db.elephantsql.com",
   port:"5432",
   database:"qmdskjtv"
});

module.exports = pool;