import React from 'react'
import { Form, Input, Button, Message } from '@arco-design/web-react';
import { IconUser, IconLock } from '@arco-design/web-react/icon';
import { useNavigate } from "react-router-dom";
import "../Register/Register.css"
const url = `http://47.108.221.20:2333/user/password/${localStorage.getItem('userId')}`

console.log(localStorage.getItem('userId'));
console.log(localStorage.getItem('token'));
const changePW = async function (url, body) {
    const rep = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(body),
    })
    return await rep.json();
}
export default function ChangePassword() {
    const FormItem = Form.Item;
    const [form] = Form.useForm()
    const navigate = useNavigate()
    return (
        <div className='Register'>
            <Form
                form={form}
                style={{ width: 320 }}
                wrapperCol={{ span: 24 }}
                autoComplete='off'
                onValuesChange={(v, vs) => {
                    console.log(v, vs);
                }}
                onSubmit={async (v) => {
                    console.log(v);
                    const data = await changePW(url, {
                        "old_password": v.oldPassword,
                        "new_password": v.newPassword
                    })
                    console.log(data);
                    if (data.status === 200) {
                        Message.success('修改成功');
                        navigate("/login")
                    } else {
                        Message.error(data.info)
                    }

                }}
            >
                <FormItem
                    field='oldPassword'
                    rules={[{
                        validator: (v, cb) => {
                            if (!v) {
                                return cb('请输入旧密码')
                            } else if (v.length < 6) {
                                return cb('密码长度要大于6')
                            }
                            cb(null)
                        }
                    }]}
                >
                    <Input
                        placeholder='旧密码'
                        prefix={<IconLock />}
                    />
                </FormItem>
                <FormItem
                    field='newPassword'
                    rules={[{
                        validator: (v, cb) => {
                            if (!v) {
                                return cb('请输入旧密码')
                            } else if (v.length < 6) {
                                return cb('密码长度要大于6')
                            }
                            cb(null)
                        }
                    }]}>
                    <Input
                        placeholder="新密码"
                        prefix={<IconLock />}
                    />
                </FormItem>
                <FormItem
                    field='confirm_password'
                    dependencies={['password']}
                    rules={[{
                        validator: (v, cb) => {
                            if (!v) {
                                return cb('请确认密码')
                            } else if (form.getFieldValue('newPassword') !== v) {
                                return cb('密码不一致')
                            }
                            cb(null)
                        }
                    }]}
                >
                    <Input
                        prefix={<IconLock />}
                        placeholder="请确认密码"
                    />
                </FormItem>
                <FormItem>
                    <Button type='primary' htmlType='submit' long>
                        修改密码
                    </Button>
                </FormItem>
            </Form>
        </div>
    )
}
