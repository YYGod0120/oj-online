import React from 'react'
import { IconUser } from '@arco-design/web-react/icon';
import { Menu, Typography } from '@arco-design/web-react';
import { Link, useLocation } from 'react-router-dom';

const MenuItem = Menu.Item;
export default function MakeProSide() {
    const { pathname } = useLocation()
    const keys = {
        '/mkpro/post': '1',
        '/mkpro/mk': '2',

        '/mkpro/text': '3',


    }
    return (
        <>
            <div style={{ fontSize: 24, color: '#000000' }}>
                <IconUser style={{ 'marginRight': 18 }} />{`${localStorage.getItem('username')}`}
            </div>
            <Menu mode='vertical' style={{ 'fontSize': 24 }} defaultSelectedKeys={'1'} selectedKeys={keys[pathname]}>
                <Link to='/mkpro/post'>
                    <MenuItem key='1' style={{ 'marginBottom': 28, marginTop: 28 }}>发布题目</MenuItem>
                </Link>
                <Link to='/mkpro/mk'>
                    <MenuItem key='2' style={{ 'marginBottom': 28 }}>我的题目</MenuItem>
                </Link>

                <Link to='/mkpro/text'>
                    <MenuItem key='3' style={{ 'marginBottom': 28 }}>测试数据</MenuItem>
                </Link>
            </Menu>
        </>

    )
}
