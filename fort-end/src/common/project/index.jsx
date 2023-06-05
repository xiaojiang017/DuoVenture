import { Menu, Button, Avatar, Tooltip, Radio, Tag } from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    HomeOutlined
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom';
import './index.scss'
import rout from '../../route/index.tsx';
import { useHistory, useLocation } from 'react-router-dom'


export default () => {
    const history = useHistory()
    const location = useLocation()
    //导航栏开关
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    //导航栏选中状态
    const [chackmenu , setChackmenu] = useState([location.pathname])

    //储存导航栏数据
    const [itemdata, setItemData] = useState([
        {
            label: "首页",
            key: "/project/home",
            type: 1
        },
        {
            label: "任务列表",
            key: "/project/taskList",
            type: 1
        }
    ])
    //储存标签页数据
    const [tagdata, settagdata] = useState([{
        label: "首页",
        key: "/project/home",
        type: 1
    },])
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
                    icon: <HomeOutlined />,
                }
            }
        })
        setItems(newdata)
    }, [itemdata])

    //路由变化时执行
    useEffect(() => {
        setChackmenu([location.pathname])
    } , [location])

    const redirect = async ({ key }) => {
        const data = itemdata?.find((item) => item.key === key)
        const isdata = tagdata?.find((item) => item.key === key)
        if (!isdata) {
            settagdata((tagedata) => {
                return [...tagedata, data]
            })
        }
        history.push({ pathname: key })
    }

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
                <div className="dv_project_view">
                    {
                        tagdata?.map((item, index) => {
                            return <Tag key={index} onClick={() => history.push({ pathname: item.key })}>{item.label}</Tag>
                        })
                    }
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
            </div>
        </div>
    )
}
