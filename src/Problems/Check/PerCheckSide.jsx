import React from 'react'
import { IconUser, IconPlusCircle } from '@arco-design/web-react/icon';
import { Menu, Typography, Button } from '@arco-design/web-react';
import { Link } from 'react-router-dom';
const { Paragraph } = Typography;
export default function PerCheckSide() {
    return (
        <div style={{ fontSize: 24, marginTop: 24 }}>
            <IconUser style={{ textAlign: 'start' }} />     {'用户'}
            <Paragraph style={{ marginBottom: 50, marginTop: 40 }}>{localStorage.getItem('username')}</Paragraph>

            <Link to='/list'>
                <Button type='primary' icon={<IconPlusCircle />} style={{ fontSize: 30, width: 200, height: 80, borderRadius: 16 }}>获取题目</Button>


            </Link>



        </div>
    )
}
