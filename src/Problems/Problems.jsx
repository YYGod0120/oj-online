import React, { useState } from 'react'
import { Select, Space, Button } from '@arco-design/web-react';
import { Outlet } from 'react-router-dom'
import MyCodeMirror from '../MyCodeMirror/MyCodeMirror';
import './Problem.css'
const Option = Select.Option;
const options = ['python', 'java', 'go', 'c', 'c++'];
export default function Problem() {
    const [selectValue, setSelectValue] = useState('javascript')

    function handleSelectChange(value) {

        setSelectValue(value)
        console.log(value);

    }
    return (
        <Space size={430} style={{ marginTop: 30, marginLeft: 50 }} align='start'>
            <Outlet></Outlet>
            <Space direction='vertical' align='start'>
                <Select
                    placeholder='Select city'
                    className={'select'}
                    style={{ width: 110, border: '1px solid var(--color-neutral-6)', borderRadius: 1 }}
                    defaultValue='python'
                    onChange={handleSelectChange}
                >
                    {options.map((option, index) => (
                        <Option key={option} disabled={index === 5} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
                <MyCodeMirror language={selectValue} />
                <Space align='end' size={470}>
                    <Button disabled>

                    </Button>
                    <Button type='primary' htmlType='submit' long style={{ width: 100 }}>
                        提交
                    </Button>
                </Space>
            </Space>

        </Space>





    )
}
