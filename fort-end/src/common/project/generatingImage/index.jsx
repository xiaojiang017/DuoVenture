import React, { useState } from 'react'
import { Image, Form, Input, Button , InputNumber , message} from 'antd';
import axios from 'axios';

export default () => {
    const [url, setUrl] = useState([])
    const [imgloading , setImgloading] = useState(false)
    const [apikey, setApikey] = useState('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')
    //为了吧apikey暴露出去，选择将api写在组件里面，后面有好的想法在改回去
    const axiosInstance = axios.create({
        timeout: 200000,
        headers: { 'Authorization': `Bearer ${apikey}` },
    });
    const chatApiimg = async (data) => {
        return await axiosInstance.post('https://api.openai-proxy.com/v1/images/generations', data).then((response) => {
            return response
        })
            .catch((error) => {
                console.error('请求错误:', error);
            });
    }
    const onFinish = async (values) => {
        const data = {
            ...values,
            "n": Number(values.n)
        }
        setImgloading(true)
        setUrl([])
        const imagedata = await chatApiimg(data)
        if(imagedata?.data){
            setUrl(imagedata.data.data)
        }else{
            message.error('出错了，你的关键词有敏感词')
        }
        setImgloading(false)
    };
    return (
        <div style={{display: 'flex' , flexDirection: "row"}}>
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ n: 1, size: "1024x1024" }}
                onFinish={onFinish}
                autoComplete="off"
                style={{width: "50%"}}
            >
                <Form.Item
                    label="关键词"
                    name="prompt"
                    rules={[{ required: true, message: '请输入关键词!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="张数"
                    name="n"
                    rules={[{ required: true, message: '请选择张数!' }]}
                >
                    <InputNumber max={5}/>
                </Form.Item>
                <Form.Item
                    label="尺寸"
                    name="size"
                    rules={[{ required: true, message: '输入图片大小!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={imgloading}>
                        生成图片
                    </Button>
                </Form.Item>
            </Form>
            {
                url?.map((item) => {
                    return <div style={{padding: 10}}>
                        <Image
                        width={200}
                        src={item.url}
                    />
                    </div>
                })
            }
        </div>
    )
}
