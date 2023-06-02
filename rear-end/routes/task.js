var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  const data = { 
    projectList: [
      {
        ptname: "项目1",
        principal: '未开始',
        pturl: 'www.baidu.com',
        ptstatus: 1,
        startTime: '2023-02-02',
        endTime: '2023-05-12'
      },
      {
        ptname: "项目2",
        principal: '开发中',
        pturl: 'www.baidu.com',
        ptstatus: 2,
        startTime: '2023-02-02',
        endTime: '2023-05-12'
      },
      {
        ptname: "项目3",
        principal: '待测试',
        pturl: 'www.baidu.com',
        ptstatus: 3,
        startTime: '2023-02-02',
        endTime: '2023-05-12'
      },
      {
        ptname: "项目4",
        principal: '测试中',
        pturl: 'www.baidu.com',
        ptstatus: 4,
        startTime: '2023-02-02',
        endTime: '2023-05-12'
      },
      {
        ptname: "项目5",
        principal: '已完成',
        pturl: 'www.baidu.com',
        ptstatus: 5,
        startTime: '2023-02-02',
        endTime: '2023-05-12'
      }
    ]
   };
  res.send(data);
});

module.exports = router;
