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
                    <MenuItem key='1' >
                        <IconHome />
                        <Link to="/home">首页</Link>
                    </MenuItem>
                    <MenuItem key='2'>
                        <IconList />
                        <Link to="/list">题集</Link>
                    </MenuItem>
                    <MenuItem key='4' disabled>
                        <IconFile />
                        <Link to="/mkpro">出题</Link>
                    </MenuItem>
                    <MenuItem key='3' disabled>
                        <IconSelectAll />
                        <Link to="/percheck">个人评测</Link>
                    </MenuItem>
                    <MenuItem key='5'>
                        <Link to="/login">登录</Link>
                    </MenuItem>
                    <MenuItem key='6'>
                        <Link to="/register">注册</Link>
                    </MenuItem>
                </Menu>
            </div>
        </>
    )
}
