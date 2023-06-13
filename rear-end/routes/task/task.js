var express = require('express');
var router = express.Router();
const mysql2 = require('mysql2')


router.post('/list', async function (req, res, next) {
  const { ptname, principal, ptstatus, startTime, endTime } = req.body?.ptstatus
  const config = getDBConfig()
  const promisePool = mysql2.createPool(config).promise()
  let sql = `select * from projecrlist where `
  const pt = []
  for(var key in { ptname, principal, ptstatus, startTime, endTime }) {
    if({ ptname, principal, ptstatus, startTime, endTime }[key]){
      sql = sql + `${key} =? and`
      pt.push({ ptname, principal, ptstatus, startTime, endTime }[key])
    }
  }
  if(ptstatus === '0') {
    sql = 'select * from projecrlist'
  }else{
    sql = sql.slice(0, -3);
  }
  const users = await promisePool.query(sql, pt)
  res.send({
    projectList: [...users[0]]
  });
});

function getDBConfig() {
  return {
    host: "127.0.0.1",
    port: 3306,
    user: 'root',
    password: "yhj0107",
    database: "project",
    connectionLimit: 1
  }
}

module.exports = router;
