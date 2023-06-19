import React, { useEffect } from 'react'
import { Table , Space , Popconfirm} from 'antd';
import { useLocation } from 'react-router-dom';

export default () => {
    const dataSource = [
        {
            key: '1',
            earntime: '2023-02-03',
            earn: 32,
            earndetail: '西湖区湖底公园1号',
        },
        {
            key: '2',
            earntime: '2023-02-04',
            earn: 42,
            earndetail: '西湖区湖底公园2号',
        },
    ];

    const columns = [
        {
            title: '时间',
            dataIndex: 'earntime',
            key: 'earntime',
        },
        {
            title: '收入',
            dataIndex: 'earn',
            key: 'earn',
        },
        {
            title: '明细',
            dataIndex: 'earndetail',
            key: 'earndetail',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {/* <a onClick={() => openmodal('edit')}>编辑</a> */}
                    <Popconfirm
                        title="确认要删除此项嘛?"
                        okText="是"
                        cancelText="否"
                    > <a>删除</a></Popconfirm>

                </Space>
            ),
        }
    ];
    const location = useLocation();
    const params = location.params;
    useEffect(() => {
        console.log(params , 'params')
    } , [])
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
