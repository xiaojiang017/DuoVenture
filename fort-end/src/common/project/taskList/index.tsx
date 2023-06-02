import React, { useState } from 'react'
import { Button, Form, Input, Space, Table, Tag, Popconfirm, message, DatePicker , Select} from 'antd';
import ConfigModal from './configModal/index.tsx';

const { RangePicker } = DatePicker;
export default () => {
    //配置弹框显示
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modaltype, setModaltype] = useState('add')
    const confirm = (e: React.MouseEvent<HTMLElement>) => {
        message.success('Click on Yes');
    };

    const cancel = (e: React.MouseEvent<HTMLElement>) => {
        message.error('Click on No');
    };
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
                    <a onClick={() => openmodal('edit')}>编辑</a>
                    <Popconfirm
                        title="确认要删除此项嘛?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="是"
                        cancelText="否"
                    > <a>删除</a></Popconfirm>

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
        //搜索函数
    };
    //打开弹框
    const openmodal = (type) => {
        setModaltype(type)
        setIsModalOpen(true)
    }
    return (
        <div className='dv_project_taskList_content'>
            <div>
                <Form
                    className='dv_project_taskList_search'
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="项目名称"
                        name="ptname"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="负责人"
                        name="principal"
                        style={{ marginLeft: 20 }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="状态"
                        name="ptstatus"
                        style={{ marginLeft: 20 }}
                    >
                        <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            options={[
                                {
                                    value: 'jack',
                                    label: 'Jack',
                                },
                                {
                                    value: 'lucy',
                                    label: 'Lucy',
                                },
                                {
                                    value: 'Yiminghe',
                                    label: 'yiminghe',
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="时间"
                        name="time"
                        style={{ marginLeft: 20 }}
                    >
                        <RangePicker />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div>
                <Button style={{ float: 'right', margin: 10 }} type="primary" onClick={() => openmodal('add')}>新增任务</Button>
                <Table columns={columns} dataSource={data} />
            </div>
            <ConfigModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modaltype={modaltype} />
        </div>
    )
}
