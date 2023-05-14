import React from 'react'
import { Select, Space, Button } from '@arco-design/web-react';
import { Outlet } from 'react-router-dom'
import MyCodeMirror from '../MyCodeMirror/MyCodeMirror';
import './Problem.css'
const Option = Select.Option;
const options = ['Python', 'Java'];
export default function Problem() {
    return (
        <Space size={430} style={{ marginTop: 30, marginLeft: 50 }} align='start'>
            <Outlet></Outlet>
            <Space direction='vertical' align='start'>
                <Select placeholder='Select city' className={'select'} style={{ width: 100, border: '1px solid var(--color-neutral-6)', borderRadius: 1 }} defaultValue='Java' >
                    {options.map((option, index) => (
                        <Option key={option} disabled={index === 4} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
                <MyCodeMirror />
                <Button type='primary' htmlType='submit' long style={{ width: 100 }}>
                    提交
                </Button>
            </Space>

        </Space>





    )
}
