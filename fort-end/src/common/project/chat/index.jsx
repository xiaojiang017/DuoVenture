import React from 'react';
import { List, Typography, Empty, Input , Button } from 'antd';
import {getchat} from '../../../api/chat.js'
const { TextArea } = Input;

export default () => {
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    return (
        <div className='dv_project_chat_home'>
            <div style={{
                marginRight: 10, height: "100%",
            }}>
                <List
                    bordered
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                         {item}
                        </List.Item>
                    )}
                />
            </div>
            <div className="dv_project_chat_show">
                <div>
                    <Empty />
                </div>
                <div className='dv_project_chat_input'>
                    <TextArea rows={2} />
                </div>
                {/* <Button type="primary" onClick={() => getchat({userInput: "你好"})}>发送</Button> */}
            </div>
        </div>
    )
} 