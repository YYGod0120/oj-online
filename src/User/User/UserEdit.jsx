import React, { useState } from 'react';

import { Form, Input, Checkbox, Button, Radio, Select, Grid, DatePicker } from '@arco-design/web-react';
const FormItem = Form.Item;
const Col = Grid.Col
const Row = Grid.Row
const Option = Select.Option;
const options = ['保密', '男', '女'];
const url = 'http://47.108.221.20:2333/info/update'
const user_id = localStorage.getItem('userId') - 0
function genderMake(str) {
    if (str === '男') {
        return 1
    } else if (str === '女') {
        return 2
    } else {
        return 0
    }
}
export default function UserEdit() {

    const [data, setData] = useState({ user_id: user_id })
    async function postData(url, body) {
        const rep = await (await fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(
                body
            )
        })).json()
        console.log(rep);
    }

    return (
        <Form
            size='large'
            labelAlign='left'
            style={{ width: 600 }}
            autoComplete='off'
            onSubmit={(v) => {
                console.log(data);
                postData(url, data)
            }}
            onChange={() => {
                console.log(data);
            }}

        >

            <Row>
                <Col span={10}>
                    <FormItem
                        label='名字'
                        style={{ marginRight: 15 }}
                        field='name'

                    >
                        <Input placeholder='' style={{}} onChange={(v) => {
                            console.log(v);
                            setData({
                                ...data,
                                'name': v
                            })
                        }} />
                    </FormItem>
                </Col>
                <Col span={10} offset={1}>
                    <FormItem label='昵称' field='nickname'>
                        <Input placeholder='' onChange={(v) => {
                            setData({
                                ...data,
                                'nickname': v
                            })
                        }} />
                    </FormItem>
                </Col>

            </Row>
            <Row>

                <Col span={10} >
                    <FormItem label='性别' field='gender'>
                        <Select
                            defaultValue={'保密'}
                            style={{ width: 200 }}
                            onChange={(value) =>
                                setData({
                                    ...data,
                                    'gender': genderMake(value)
                                })
                            }
                        >
                            {options.map((option) => (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </FormItem>
                </Col>
                <Col span={10} offset={1}>
                    <FormItem label='生日' field='birthday'>
                        <DatePicker onChange={(v) => {
                            setData({
                                ...data,
                                'year': v.slice(0, 4) - 0,
                                'month': v.slice(5, 7) - 0,
                                'day': v.slice(8, 10) - 0,

                            })
                        }} />

                    </FormItem>
                </Col>
            </Row>
            <Row>



            </Row>
            <Row>
                <Col span={12}>
                    <FormItem labelAlign='left' label='邮箱' field='email'>
                        <Input placeholder='' onChange={(v) => {
                            setData({
                                ...data,
                                'email': v
                            })
                        }} />
                    </FormItem>
                </Col>
            </Row>



            <FormItem wrapperCol={{ offset: 5 }}>
                <Button type='primary' htmlType='submit'>提交</Button>
            </FormItem>
        </Form>
    )
}
