import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import './HeaderTitle.css'
import { Menu, Dropdown, Space, Button } from "@arco-design/web-react";
import { IconList, IconHome, IconFile, IconSelectAll, IconUser } from '@arco-design/web-react/icon';

const MenuItem = Menu.Item;


// const SubMenu = Menu.SubMenu;
export default function HeaderTitle({ token, userId, admId }) {

    const { pathname } = useLocation()
    const keys = {
        '/home': '1',
        '/list': '2',
        '/mkpro': '4',
        '/check': '3',
        '/login': '5',
        '/cpw': '6'
    }
    const dropList = (
        <Menu>
            <Link to="/cpw" className='cp'>
                <Menu.Item key='0_1' >修改密码</Menu.Item>
            </Link>
            <Menu.Item
                key='0_2'
                onClick={() => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('userId')
                    localStorage.removeItem('admId')
                    window.location.reload()
                }}
            >退出！</Menu.Item>
        </Menu>
    );
    return (
        <>
            <div className='menu-demo'>

                <Menu mode='horizontal' defaultSelectedKeys={['1']} selectedKeys={keys[pathname]} style={{ height: 60 }}>
                    <MenuItem
                        key='0'
                        style={{ padding: 0, marginRight: 600, }}
                    >
                        <div
                            style={{
                                width: 200,
                                height: 20,
                                borderRadius: 2,
                                background: 'var(--color-fill-3)',
                                cursor: 'text',
                                color: 'var(--color-neutral-8)',
                                fontSize: "24px"

                            }}
                        >
                            在线判题系统(OJ)
                        </div>
                    </MenuItem>
                    <Link to="/home">
                        <MenuItem key='1' >
                            <IconHome />
                            首页
                        </MenuItem>
                    </Link>
                    <Link to="/list">
                        <MenuItem key='2'>
                            <IconList />
                            题集
                        </MenuItem>
                    </Link>
                    {admId ? (
                        <>
                            <Link to="/mkpro">
                                <MenuItem key='4'>
                                    <IconFile />
                                    出题
                                </MenuItem>
                            </Link>
                        </>
                    ) : (
                        <Link to="/mkpro">
                            <MenuItem key='4' disabled>
                                <IconFile />
                                出题
                            </MenuItem>
                        </Link>
                    )}

                    {userId ? (
                        <Link to="/check">
                            <MenuItem key='3' >
                                <IconSelectAll />
                                个人评测
                            </MenuItem>
                        </Link>) : (
                        <Link to="/check">
                            <MenuItem key='3' disabled>
                                <IconSelectAll />
                                个人评测
                            </MenuItem>
                        </Link>
                    )}



                    {token ? (
                        <>
                            <MenuItem key='6'>
                                <Space className='dropdown-demo'>
                                    <Dropdown droplist={dropList} position='bl'>
                                        <Button type='text' >
                                            <IconUser />name
                                        </Button>
                                    </Dropdown>
                                </Space>
                            </MenuItem>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <MenuItem key='5'>
                                    登录
                                </MenuItem>
                            </Link>
                        </>
                    )}
                </Menu>
            </div>
        </>
    )
}
