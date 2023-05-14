import React from 'react'
import { Select, Space } from '@arco-design/web-react';
import { Outlet } from 'react-router-dom'
import MyCodeMirror from '../MyCodeMirror/MyCodeMirror';
import './Problem.css'
const Option = Select.Option;
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
                <MyCodeMirror />
            </Space>
        </Space>





    )
}
