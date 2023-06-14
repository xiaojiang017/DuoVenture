var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'login2022';

const loginmessage = [
    {
        username: 'admin',
        password: 'admin',
        power: 1
    },
    {
        username: 'user',
        password: 'user',
        power: 1
    }
]

router.post('/', async function (req, res, next) {
    const { username, password } = req.body?.loginMessage
    const istrue = loginmessage.some((item) => item.username === username && item.password === password)
    if (istrue) {
        let token = jwt.sign({username , password} , SECRET_KEY , { expiresIn: '3h' } )
        res.send({
            message: '登陆成功',
            istrue: true,
            token
        });
    } else {
        res.send({
            message: '登陆失败',
            istrue: false
        });
    }

});

module.exports = router;
