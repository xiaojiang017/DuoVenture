import React, { useEffect, useState } from 'react';
import ChatRoom from './chatRoom.jsx';
import ChatList from './chatList.jsx';
import { message, Modal, Form, Input } from 'antd';
import axios from 'axios';

export default () => {
    const [apikey, setApikey] = useState('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')
    //为了吧apikey暴露出去，选择将api写在组件里面，后面有好的想法在改回去
    const axiosInstance = axios.create({
        timeout: 200000,
        headers: { 'Authorization': `Bearer ${apikey}` },
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const handleOk = () => {
        form
            .validateFields()
            .then(values => {
                form.resetFields();
                setApikey(values.apikey)
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const chatApi = async (data) => {
        return await axiosInstance.post('https://api.openai-proxy.com/v1/chat/completions', {
            "model": "gpt-3.5-turbo",
            "temperature": 0.2,
            // "stream": true,
            "messages": data,
        }).then((response) => {
            return response
        })
            .catch((error) => {
                console.error('请求错误:', error);
            });
    }
    //查询loading
    const [btnloading, setBtnloading] = useState(false)
    const [chatlist, setChatlist] = useState(['聊天1'])
    //聊天数据集
    const [messages, setMessages] = useState([[]])
    //当前聊天框的数据
    const [messageData, setMessageData] = useState([])
    //当前聊天的key值
    const [messageKey, setMessageKey] = useState(0)
    const onclickfunc = async (values) => {
        if (values.content && values.content.length > 0) {
            setBtnloading(true)
            //防止超过最大限度
            const newdata = truncateData([...messageData, {
                "role": "user",
                "content": values.content
            }], 1000)
            //第一个更改数组
            setMessageData(newdata)
            const resdata = await chatApi(newdata)
            // return 
            setBtnloading(false)
            if (resdata?.status === 200) {
                console.log(resdata)
                const repdata = resdata?.data.choices?.[0].message
                setMessageData((item) => [...item, repdata])
            } else {
                message.error(resdata.message);
            }
        } else {
            message.warning('你没有输入内容呦');
        }
    }
    const truncateData = (data, maxLength) => {
        //超出长度删除函数
        let totalLength = data.reduce((acc, obj) => {
            for (let key in obj) {
                if (obj.hasOwnProperty(key) && typeof obj[key] === "string") {
                    acc += obj[key].length;
                }
            }
            return acc;
        }, 0);

        while (totalLength > maxLength) {
            const obj = data[0];
            for (let key in obj) {
                if (obj.hasOwnProperty(key) && typeof obj[key] === "string") {
                    totalLength -= obj[key].length;
                }
            }
            data.splice(1, 1);
        }
        return data;
    }
    //messageData更改同步更新到message里面
    useEffect(() => {
        setMessages((messages) => {
            const fisterdata = messages.slice(0, messageKey)
            const lastdata = messages.slice(messageKey + 1, message.length)
            return [...fisterdata, messageData, ...lastdata]
        })
    }, [messageData])
    //动态渲染聊天时数据
    useEffect(() => {
        setMessageData(messages[messageKey])
    }, [messageKey])
    //同步更新聊天数据集，根据chatlist
    useEffect(() => {
        setMessages((item) => [...item, []])
    }, [chatlist])

    return (
        <div>
            <div style={{ textAlign: 'center' }}>说明：聊天记录报错在本地，每次刷新会清空聊天记录。apikey可能会过期，更改apikey请点击<a onClick={() => setIsModalOpen(true)}>这里</a>，更多消息请关注公众号：阿九网创</div>
            <div className='dv_project_chat_home'>
                <ChatList chatlist={chatlist} setChatlist={setChatlist} setMessageKey={setMessageKey} />
                <ChatRoom onclickfunc={onclickfunc} messageData={messageData} btnloading={btnloading} />
            </div>
            <Modal title="apikey" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    form={form}
                    style={{ flexGrow: 1, marginRight: 10 }}
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="apikey"
                        name="apikey"
                        rules={[{ required: true, message: '请输入apikey!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
} 