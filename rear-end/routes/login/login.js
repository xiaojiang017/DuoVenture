var express = require('express');
var router = express.Router();

const loginmessage = [
    {
        username: 'admin',
        password: 'admin',
        power: 1
    }
]

router.post('/', async function (req, res, next) {
    const { username, password } = req.body?.loginMessage
    const istrue = loginmessage.some((item) => item.username === username && item.password === password)
    if (istrue) {
        res.send({
            message: '登陆成功',
            istrue: true
        });
    } else {
        res.send({
            message: '登陆失败',
            istrue: false
        });
    }

});

module.exports = router;
