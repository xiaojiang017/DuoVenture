import React from 'react'
import { Button, Form, Input, message } from 'antd';
import './index.scss'
import { useHistory, useLocation } from 'react-router-dom'
import loginimg from './picture/login-img.png'; 
import loginlogo from './picture/login_logo.png'
import {loginPort} from '../../api/login.js'

export default () => {
    const history = useHistory()
    const onFinish = async (values) => {
        const { username, password } = values
        const data =  await loginPort({loginMessage: {
            username,
            password
        }})
        if (data?.data?.istrue) {
            history.push({ pathname: '/project/home' })
            message.success('登陆成功' , 10)
        } else {
            if(data.message){
                message.error(data.message);
            }else{
                message.error('用户名或密码错误');
            }
        }
    };
    return (
        <div className='dv_login_body'>
            <div className="login_box">
                <div className="login_l_img"><img src={loginimg} /></div>
                <div className="login">
                    <div className="login_logo"><img src={loginlogo}/></div>
                    {/* <div className="login_name">
                        <p>后台管理系统</p>
                    </div> */}
                    <div className='dv_login_form'>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
                            <Button type="primary" htmlType="submit">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className="copyright">有限公司 版权所有©2020 </div>
            </div>
        </div>
    )
}
