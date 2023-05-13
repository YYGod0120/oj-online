import React from 'react'
import { Link } from "react-router-dom";
import './HeaderTitle.css'
import { Menu, } from "@arco-design/web-react";
import { IconList, IconHome, IconFile, IconSelectAll } from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;
// const SubMenu = Menu.SubMenu;
export default function HeaderTitle() {
    return (
        <>
            <div className='menu-demo'>

                <Menu mode='horizontal' defaultSelectedKeys={['1']}>
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
                        <MenuItem key='4' disabled>
                            <IconFile />
                            出题
                        </MenuItem>
                    </Link>
                    <Link to="/percheck">
                        <MenuItem key='3' disabled>
                            <IconSelectAll />
                            个人评测
                        </MenuItem>
                    </Link>
                    <Link to="/login">
                        <MenuItem key='5'>
                            登录
                        </MenuItem>
                    </Link>
                    <Link to="/register">
                        <MenuItem key='6'>
                            注册
                        </MenuItem>
                    </Link>
                </Menu>
            </div>
        </>
    )
}
