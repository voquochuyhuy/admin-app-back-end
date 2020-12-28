import { async } from 'regenerator-runtime';

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'voquochuy798',
  password: 'voquochuy798',
  database: 'togetherbetter'
})

const runQuery = async (query)=>{
  return  new Promise(function(resolve,reject){
    connection.query(query,function(err,rows,fields){
      console.log(err);
      resolve(rows);
    })
  });
};
export default runQuery;

