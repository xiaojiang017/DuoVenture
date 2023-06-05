var express = require('express');
var router = express.Router();

router.post('/list', function(req, res, next) {
  const data = { 
    projectList: [
      {
        id: 1,
        ptname: "项目1",
        principal: '未开始',
        pturl: 'www.baidu.com',
        ptstatus: 1,
        startTime: '2023-02-02',
        endTime: '2023-05-12'
      },
      {
        id: 2,
        ptname: "项目2",
        principal: '开发中',
        pturl: 'www.baidu.com',
        ptstatus: 2,
        startTime: '2023-02-02',
        endTime: '2023-05-12'
      },
      {
        id: 3,
        ptname: "项目3",
        principal: '待测试',
        pturl: 'www.baidu.com',
        ptstatus: 3,
        startTime: '2023-02-02',
        endTime: '2023-05-12'
      },
      {
        id: 4,
        ptname: "项目4",
        principal: '测试中',
        pturl: 'www.baidu.com',
        ptstatus: 4,
        startTime: '2023-02-02',
        endTime: '2023-05-12'
      },
      {
        id: 5,
        ptname: "项目5",
        principal: '已完成',
        pturl: 'www.baidu.com',
        ptstatus: 5,
        startTime: '2023-02-02',
        endTime: '2023-05-12'
      }
    ]
   };
  const ptstatus = req.body?.ptstatus 
  let resdata
  if(ptstatus === 0)  {
    resdata = data.projectList
  }else{
    resdata = data.projectList?.map((item) => {
      if(ptstatus === item.ptstatus){
        return item
      }
    })?.filter((ft) => typeof ft !== 'undefined')
  }
  res.send({
    projectList: resdata
    });
});

module.exports = router;
