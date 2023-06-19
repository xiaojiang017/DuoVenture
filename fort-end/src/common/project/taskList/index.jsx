import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Space, Table, Tag, Popconfirm, message, DatePicker , Select} from 'antd';
import ConfigModal from './configModal/index.jsx';
import {getlist} from '../../../api/projectListApi.ts';
import {ptstatus , ptstatuscolor , ptstatusData} from '../index.js'

const { RangePicker } = DatePicker;
export default () => {
    //配置弹框显示
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modaltype, setModaltype] = useState('add')
    const [tableData , setTableData] = useState([])
    const columns = [
        {
            title: '项目名称',
            dataIndex: 'ptname',
            key: 'ptname',
        },
        {
            title: '负责人',
            dataIndex: 'principal',
            key: 'principal',
        },
        {
            title: '原型地址',
            dataIndex: 'pturl',
            key: 'pturl',
        },
        {
            title: '状态',
            key: 'ptstatus',
            dataIndex: 'ptstatus',
            render: (text) => {
               return <Tag color={ptstatuscolor[text]}>{ptstatus[text]}</Tag>
            }
        },
        {
            title: '开始时间',
            dataIndex: 'startTime',
            key: 'address',
        },
        {
            title: '结束时间',
            dataIndex: 'endTime',
            key: 'endTime',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => openmodal('edit')}>编辑</a>
                    <Popconfirm
                        title="确认要删除此项嘛?"
                        okText="是"
                        cancelText="否"
                    > <a>删除</a></Popconfirm>

                </Space>
            ),
        },
    ];
    const onFinish = (values) => {
        const parameter = {
            ...values,
            startTime: values['time']?.[0].format('YYYY-MM-DD'),
            endTime: values['time']?.[1].format('YYYY-MM-DD')
        }
        getList(parameter)
    };
    //打开弹框
    const openmodal = (type) => {
        setModaltype(type)
        setIsModalOpen(true)
    }
    const getList = async (ptstatus) => {
        const {data , status} = await getlist({ptstatus: ptstatus}) || {}
        if(status === 200){
            setTableData(data.projectList)
        }else{
            message.error('出错了')
        }
    }
    useEffect(() => {
        getList({
            ptstatus: "0"
        })
    },[])
    return (
        <div className='dv_project_taskList_content'>
            <div>
                <Form
                    className='dv_project_taskList_search'
                    name="basic"
                    initialValues={{ ptstatus: 0 }}
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
                            style={{ width: 120 }}
                            options={ptstatusData}
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
                <Table columns={columns} dataSource={tableData} rowKey={"ptname"} />
            </div>
            <ConfigModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modaltype={modaltype} />
        </div>
    )
}
