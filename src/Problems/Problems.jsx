import React, { useEffect, useState } from 'react'
import { Select, Space, Button, Message } from '@arco-design/web-react';
import { Outlet, useParams, useNavigate } from 'react-router-dom'
import MyCodeMirror from '../MyCodeMirror/MyCodeMirror';
import './Problem.css'
import { Grid } from '@arco-design/web-react';
const Row = Grid.Row;
const Col = Grid.Col;
const Option = Select.Option;
const options = ['Python', 'Java', 'Go', 'C', 'C++'];
export default function Problem() {
    const navigate = useNavigate()
    let { id } = useParams()
    id = id - 0
    let userId = localStorage.getItem('userId') - 0
    const [selectValue, setSelectValue] = useState('Python')
    const [code, setCode] = useState('')
    console.log(JSON.stringify({
        // eslint-disable-next-line no-undef
        "user_id": userId,
        // eslint-disable-next-line no-undef
        "problem_id": id,
        "code": code,
        "language": selectValue,
    }));
    const handleSubmit = async function () {
        const rep = await fetch("http://47.108.221.20:2333/submission/submit", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body:
                JSON.stringify({
                    // eslint-disable-next-line no-undef
                    "user_id": userId,
                    // eslint-disable-next-line no-undef
                    "problem_id": id,
                    "code": code,
                    "language": selectValue,
                }),
            redirect: 'follow'
        })
        const data = await rep.json()
        if (data.status === 200) {
            Message.success('提交成功')
            navigate("/check")
        } else {
            Message.error('请登陆或登录已过期')
        }
        console.log(data);
        return data

    }



    function handleSelectChange(value) {

        setSelectValue(value)
        console.log(value);

    }
    return (
        <Row style={{ marginTop: 20 }}>
            <Col span={12}>
                <Outlet></Outlet>
            </Col>
            <Col span={12}>
                <Space direction='vertical' align='start'>
                    <Select
                        placeholder='Select city'
                        className={'select'}
                        style={{ width: 110, border: '1px solid var(--color-neutral-6)', borderRadius: 1 }}
                        defaultValue='Python'
                        onChange={handleSelectChange}
                    >
                        {options.map((option, index) => (
                            <Option key={option} disabled={index === 5} value={option}>
                                {option}
                            </Option>
                        ))}
                    </Select>
                    <MyCodeMirror language={selectValue} onChange={(ev, value) => {
                        setCode(ev)
                        console.log(ev);
                        console.log(typeof ev);

                    }} />
                    <Space align='end' size={470}>
                        <Button disabled>

                        </Button>
                        <Button
                            type='primary'

                            long
                            style={{ width: 100 }}
                            onClick={handleSubmit}
                        >
                            提交
                        </Button>
                    </Space>
                </Space>
            </Col>
        </Row>








    )
}
