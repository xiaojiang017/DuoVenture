import React, { useEffect, useState } from 'react';
import { chatApi } from '../../../api/chat.js'
import ChatRoom from './chatRoom.jsx';
import ChatList from './chatList.jsx';
import { message } from 'antd';

export default () => {
    //查询loading
    const [btnloading , setBtnloading] = useState(false)
    const [chatlist , setChatlist] = useState(['聊天1'])
    //聊天数据集
    const [message , setMessage] = useState([[]])
    //当前聊天框的数据
    const [messageData, setMessageData] = useState([])
    //当前聊天的key值
    const [messageKey , setMessageKey] = useState(0)
    const onclickfunc = async (values) => {
        setBtnloading(true)
        //防止超过最大限度
       const newdata = truncateData([...messageData , {"role": "user",
        "content": values.content}] , 1000)
        //第一个更改数组
        setMessageData(newdata)
        const resdata = await chatApi(newdata)
        setBtnloading(false)
        const repdata = resdata.data.choices[0].message
        setMessageData((item) => [...item , repdata])
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
        setMessage((message) => {
            const fisterdata = message.slice(0 , messageKey)
            const lastdata = message.slice(messageKey + 1 , message.length)
            return [...fisterdata , messageData , ...lastdata]
        })
    } , [messageData])
    //动态渲染聊天时数据
    useEffect(() => {
        setMessageData(message[messageKey])
    } ,[messageKey])
    //同步更新聊天数据集，根据chatlist
    useEffect(() => {
        setMessage((item) => [...item , []])
    } , [chatlist])

    return (
        <div className='dv_project_chat_home'>
            <ChatList chatlist={chatlist} setChatlist={setChatlist} setMessageKey={setMessageKey}/>
            <ChatRoom onclickfunc={onclickfunc} messageData={messageData} btnloading={btnloading}/>
        </div>
    )
} 