import React from 'react'
import { IconUser } from '@arco-design/web-react/icon';
import { Menu, Typography } from '@arco-design/web-react';

const MenuItem = Menu.Item;
export default function MakeProSide() {
    return (
        <>
            <div style={{ fontSize: 24, color: '#000000' }}>
                <IconUser style={{ 'marginRight': 18 }} />{`${localStorage.getItem('username')}`}
            </div>
            <Menu mode='vertical' style={{ 'fontSize': 24 }} defaultSelectedKeys={'1'}>
                <MenuItem key='1' style={{ 'marginBottom': 28, marginTop: 28 }}>发布题目</MenuItem>
                <MenuItem key='2' style={{ 'marginBottom': 28 }}>我的题目</MenuItem>
                <MenuItem key='3' style={{ 'marginBottom': 28 }}>测试数据</MenuItem>
            </Menu>
        </>

    )
}
