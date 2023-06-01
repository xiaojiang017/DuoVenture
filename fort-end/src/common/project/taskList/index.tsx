import React from 'react'
import { Button, Form, Input, Space, Table, Tag } from 'antd';

export default () => {
    const columns = [
        {
            title: '项目名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '负责人',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '原型地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '状态',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '开始时间',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '结束时间',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='dv_project_taskList_content'>
            <div>
                <Form
                    className='dv_project_taskList_search'
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="项目名称"
                        name="username"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="负责人"
                        name="password"
                        style={{ marginLeft: 20 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="状态"
                        name="password"
                        style={{ marginLeft: 20 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="时间"
                        name="password"
                        style={{ marginLeft: 20 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}
