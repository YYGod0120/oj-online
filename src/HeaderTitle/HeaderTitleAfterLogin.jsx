import React from 'react'
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button, Space } from "@arco-design/web-react";

import { IconList, IconHome, IconFile, IconSelectAll, IconUser } from '@arco-design/web-react/icon';

const MenuItem = Menu.Item;

export default function LoginAndReg() {
    const dropList = (
        <Menu>
            <Link to="/cpw" className='cp'>
                <Menu.Item key='0_1' >修改密码</Menu.Item>
            </Link>
            <Menu.Item key='0_2'>退出！</Menu.Item>
        </Menu>
    );
    return (
        <>
            <div className='menu-demo'>

                <Menu mode='horizontal' defaultSelectedKeys={['1']} style={{ height: 60 }}>
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
                    <Link to="/mkpro">
                        <MenuItem key='4' >
                            <IconFile />
                            出题
                        </MenuItem>
                    </Link>
                    <Link to="/percheck">
                        <MenuItem key='3' >
                            <IconSelectAll />
                            个人评测
                        </MenuItem>
                    </Link>

                    <MenuItem>
                        <Space className='dropdown-demo'>
                            <Dropdown droplist={dropList} position='bl'>
                                <Button type='text' >
                                    <IconUser />name
                                </Button>
                            </Dropdown>
                        </Space>
                    </MenuItem>
                </Menu>
            </div>
        </>

    )
}
