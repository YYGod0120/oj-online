import React, { useEffect, useState } from 'react'
import { Select, Space, Button } from '@arco-design/web-react';
import { Outlet, useParams } from 'react-router-dom'
import MyCodeMirror from '../MyCodeMirror/MyCodeMirror';
import './Problem.css'
import { Grid } from '@arco-design/web-react';
const Row = Grid.Row;
const Col = Grid.Col;
const Option = Select.Option;
const options = ['python', 'java', 'go', 'c', 'c++'];
export default function Problem() {

    let { id } = useParams()
    // eslint-disable-next-line no-undef

    console.log(id);

    const userId = localStorage.getItem('userId') - 0

    console.log(userId);

    const [selectValue, setSelectValue] = useState('python')
    const [code, setCode] = useState('')
    const handleSubmit = async function () {
        const rep = await fetch('http://47.108.221.20:2333/submission/sumbit', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body:
                JSON.stringify({
                    // eslint-disable-next-line no-undef
                    'user_id': userId,
                    // eslint-disable-next-line no-undef
                    'problem_id': id,
                    'code': code,
                    'language': selectValue
                })
        })
        const data = await rep.json()
        console.log(data);
        return data
    }
    // async function handleSubmit(url) {
    //     const submitResult = await getRep(url)
    // }


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
                        defaultValue='python'
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
                    }} />
                    <Space align='end' size={470}>
                        <Button disabled>

                        </Button>
                        <Button
                            type='primary'
                            htmlType='submit'
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
