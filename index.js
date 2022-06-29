var mysql = require('mysql');


var pool  = mysql.createPool({
  host:"aws-sample-db.cko4fkw4kocs.ap-south-1.rds.amazonaws.com",
  user:"admin",
  password:"Praveen123",
  port:"3306",
  database:"sampledb"
  });

exports.handler =  (event, context, callback) => {
  //prevent timeout from waiting event loop
  context.callbackWaitsForEmptyEventLoop = false;
  pool.getConnection(function(err, connection) {
    // Use the connection
    connection.query('SELECT name from users where id=1', function (error, results, fields) {
      // And done with the connection.
      connection.release();
      // Handle error after the release.
      if (error) callback(error);
      else callback(null,results[0].name);

    });
  });
};




 

