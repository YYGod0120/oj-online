import React, { useState } from 'react';

import { Form, Input, Checkbox, Button, Radio, Select, Grid } from '@arco-design/web-react';
const FormItem = Form.Item;
const Col = Grid.Col
const Row = Grid.Row
const Option = Select.Option;
const options = ['保密', '男', '女'];
const url = 'http://47.108.221.20:2333/info/update'
export default function UserEdit() {
    const [data, setData] = useState({})
    async function postData(url, body) {
        const rep = await (await fetch(url, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(body)
        })).json()
        console.log(rep.data);
    }
    function getFieldValue() {

    }
    return (
        <Form size='large' labelAlign='left' style={{ width: 600 }} autoComplete='off'>
            <Row>
                <Col span={10}>
                    <FormItem label='名字' style={{ marginRight: 15 }}>
                        <Input placeholder='' style={{}} />
                    </FormItem>
                </Col>
                <Col span={10} offset={1}>
                    <FormItem label='UID'>
                        <Input placeholder='' />
                    </FormItem>
                </Col>

            </Row>
            <Row>
                <Col span={10}>
                    <FormItem label='昵称'>
                        <Input placeholder='' />
                    </FormItem>
                </Col>
                <Col span={10} offset={1}>
                    <FormItem label='性别'>
                        <Select
                            defaultValue={'保密'}
                            style={{ width: 200 }}
                            onChange={(value) =>
                                console.log(value)
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

            </Row>
            <Row>
                <Col span={24}>
                    <FormItem labelCol={{ span: 2 }} label='生日' >
                        <Input.Group compact>
                            <Input style={{ width: '30%' }} placeholder='' />
                            <Input style={{ width: '10%' }} defaultValue='年' disabled />
                            <Input style={{ width: '20%' }} placeholder='' />
                            <Input style={{ width: '10%' }} defaultValue='月' disabled />
                            <Input style={{ width: '20%' }} placeholder='' />
                            <Input style={{ width: '10%' }} defaultValue='日' disabled />
                        </Input.Group>
                    </FormItem>
                </Col>


            </Row>
            <Row>
                <Col span={12}>
                    <FormItem labelAlign='left' label='邮箱'>
                        <Input placeholder='' />
                    </FormItem>
                </Col>
            </Row>



            <FormItem wrapperCol={{ offset: 5 }}>
                <Button type='primary'>Submit</Button>
            </FormItem>
        </Form>
    )
}
