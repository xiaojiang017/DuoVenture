import React from 'react'
import { Button,Form, Input } from 'antd';
import {
    SendOutlined
} from '@ant-design/icons';
export default (props) => {
    const { onclickfunc  , messageData , btnloading} = props
    const [form] = Form.useForm();
    const onFinish = () => {
        //获取到值
        form
        .validateFields()
        .then(values => {
          form.resetFields();
          onclickfunc(values);
        })
        .catch(info => {
          console.log('Validate Failed:', info);
        });
    }
    return (
        <div className='dv_project_chat_room'>
            <div className='dv_project_chat_room_top'>
                {
                    messageData?.map((item , index) => {
                        return <div key={index}>{item.content}</div>
                    })
                }
            </div>
            <div className='dv_project_chat_room_input'>
                <Form
                    form={form}
                    style={{flexGrow: 1 , marginRight: 10}}
                    name="basic"
                    wrapperCol={{ span: 24 }}
                    autoComplete="off"
                >
                    <Form.Item
                        name="content"
                    >
                        <Input />
                    </Form.Item>
                </Form>
                <Button type="primary" onClick={onFinish} icon={<SendOutlined />} loading={btnloading}>发送</Button>
            </div>
        </div>
    )
}
