import { Menu, Button, Avatar, Tooltip, Radio, Tag , Modal} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    HomeOutlined,
    PlusOutlined,
    UnorderedListOutlined,
    OrderedListOutlined,
    DiffOutlined
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import './index.scss'
import rout from '../../route/index.jsx';
import { useHistory, useLocation } from 'react-router-dom'

export default () => {
    const history = useHistory()
    const location = useLocation()
    //导航栏开关
    const [collapsed, setCollapsed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    //导航栏选中状态
    const [chackmenu, setChackmenu] = useState([location.pathname])

    //储存导航栏数据
    const [itemdata, setItemData] = useState([
        {
            label: "首页",
            key: "/project/home",
            icon: <HomeOutlined />,
            type: 1
        },
        {
            label: "任务列表",
            key: "/project/taskList",
            icon: <UnorderedListOutlined />,
            type: 1
        },
        {
            label: "项目列表",
            key: "/project",
            icon: <OrderedListOutlined />,
            type: 12
        },
        {
            label: "添加任务",
            key: "/project/addproject",
            type: 121
        },
        {
            label: '文档编写',
            icon: <DiffOutlined />,
            key: "/project/writeDocument",
            type: 1
        },
    ])
    //导航栏数据
    const [items, setItems] = useState([])
    // 登陆头像点击框
    const headRendr = () => {
        return <Radio.Group defaultValue="a" buttonStyle="solid" style={{ display: 'flex', flexDirection: "column" }}>
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
            <Radio.Button value="d">Chengdu</Radio.Button>
        </Radio.Group>
    }
    useEffect(() => {
        const newdata = itemdata?.map((item) => {
            if (item.type === 1) {
                return {
                    label: item.label,
                    key: item.key,
                    icon: item.icon,
                }
            } else if (item.type === 12) {
                return {
                    label: item.label,
                    key: item.key,
                    icon: item.icon,
                    children: itemdata?.map((it) => {
                        if (it.type === 122) {
                            return {
                                label: item.label,
                                key: item.key,
                            }
                        }
                        if (it.type === 121) {
                            return {
                                label: <Button icon={<PlusOutlined />}>
                                    {it.label}
                                </Button>,
                                key: it.key,
                            }
                        }
                    })?.filter((ft) => typeof ft !== 'undefined')
                }
            }
        })?.filter((ft) => typeof ft !== 'undefined')
        setItems(newdata)
    }, [itemdata])

    //路由变化时执行
    useEffect(() => {
        setChackmenu([location.pathname])
    }, [location])

    const redirect = async ({ key }) => {
        if (key.includes('addproject')) {
            setIsModalOpen(true)
        } else {
            history.push({ pathname: key })
        }
    }
    const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    return (
        <div className='dv_project_content'>
            <div className='dv_project_menu'>
                <Menu
                    defaultSelectedKeys={chackmenu}
                    style={{ height: '100vh' }}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={({ key }) => redirect({ key })}
                />
            </div>
            <div className='dv_project_route'>
                <div className='dv_project_head'>
                    <Button type="text" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <span style={{ color: '#97a8be' }}>首页</span>
                    <div className='dv_project_head_right'>
                        {/* 全屏 */}
                        <Tooltip title={headRendr} placement="bottomLeft" trigger='click' color="#fff" style={{ padding: 0 }}>
                            <Avatar size={"default"} icon={<UserOutlined />} />
                        </Tooltip>
                    </div>
                </div>
                <div className='dv_main'>
                    <div className='dv_project_main'>
                        {
                            rout && rout?.map((item, index) => {
                                return <Route path={item.path} component={item.component} key={index} />
                            })
                        }
                    </div>
                </div>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </div>
    )
}
