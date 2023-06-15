import React from 'react'
import { Space, Table, Tag, Button } from 'antd';

const columns = [
    {
        title: '账号',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '密码',
        dataIndex: 'password',
        key: 'password',
        render: (text) => <div>*******</div>,
    },
    {
        title: '状态',
        dataIndex: 'statue',
        key: 'statue',
        render: (text) => {
            switch (text) {
                case 1:
                   return <Tag color="#2db7f5">开启</Tag>
                    break;
                case 2:
                   return <Tag color="#f50">关闭</Tag>
                    break;
            }
        }
    },
    {
        title: '操作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>编辑</a>
                <a>删除</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        username: 'admin',
        password: 'admin',
        statue: 1,
    },
    {
        key: '2',
        username: 'user',
        password: "user",
        statue: 2,
    },
];

export default () => {
    return (
        <div>
            <div><Button type="primary">添加人员</Button></div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
