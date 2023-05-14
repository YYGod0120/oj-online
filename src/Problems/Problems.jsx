import React from 'react'
import { Select, Input, Space } from '@arco-design/web-react';
import { Outlet } from 'react-router-dom'
import './Problem.css'
const Option = Select.Option;
const TextArea = Input.TextArea
const options = ['C', 'Python', 'Java', 'C++'];
export default function Problem() {
    return (
        <Space size={400} style={{ marginTop: 80 }} align='start'>
            <Outlet></Outlet>
            <Space direction='vertical' align='start'>
                <Select placeholder='Select city' className={'select'} style={{ width: 154, border: '1px solid var(--color-neutral-6)', borderRadius: 1 }} defaultValue='C' >
                    {options.map((option, index) => (
                        <Option key={option} disabled={index === 4} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
                <Input.Group compact>
                    <TextArea style={{ minHeight: 500, width: 10, backgroundColor: 'rgb(72, 72, 72)', border: 'none' }} readonly />
                    <TextArea placeholder='' style={{ minHeight: 500, width: 500, resize: 'none', backgroundColor: '#2B2B2B', color: '#A9B7C6', border: 'none' }} />
                </Input.Group>

            </Space>
        </Space>





    )
}
