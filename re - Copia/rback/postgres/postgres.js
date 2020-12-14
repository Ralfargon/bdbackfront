var pg = require('pg');
var conString = "postgres://postgres:123456@localhost/bdproject";


module.exports = {
  execute(query) {
    const config = {
      user: 'postgres',
      database: 'bdproject',
      password: '123456',
      port: 5432                  //Default port, change it if needed
    };
    const pool = new pg.Pool(config);
    pool.connect(function (err, client, done) {
      if (err) {
        console.log("Can not connect to the DB" + err);
      }
      client.query(query, function (err, result) {
        done();
        if (err) {
          console.log(err);
        }
        console.log(result.rows);
      })
    })
  },
};