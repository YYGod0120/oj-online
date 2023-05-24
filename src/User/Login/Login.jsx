import JSONbig from 'json-bigint';
import { Form, Input, Button, Space, Message } from '@arco-design/web-react';
import { IconUser, IconLock } from '@arco-design/web-react/icon';
import React from 'react'
import { Link, Navigate } from "react-router-dom";
import "./Login.css"


const url = 'http://47.108.221.20:2333/user/login'
const FormItem = Form.Item;
const login = async function (url, body) {
    const rep = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const data = await rep.json()
    return data
}
export default function Login() {
    const [form] = Form.useForm()
    return (
        <>
            <div className='login'>
                <Form
                    style={{ width: 400 }}
                    autoComplete='off'
                    form={form}
                    onValuesChange={(v, vs) => {
                        console.log(v, vs);
                    }}
                    onSubmit={async (v) => {
                        console.log(v);
                        localStorage.setItem('username', v.username)
                        console.log(v.username);
                        console.log(v.password);
                        const data = await login(url, {
                            "username": v.username,
                            "password": v.password
                        })

                        if (data.status === 200) {
                            localStorage.setItem('token', data.data.token)
                            // eslint-disable-next-line no-undef
                            localStorage.setItem('userId', data.data.user_id)
                            //先设置管理员id和用户id一样之后再做调整
                            localStorage.setItem('admId', data.data.user_id)
                            console.log(data.data.user_id);
                            Message.success('登录成功');
                            window.location.reload()
                        } else {
                            Message.error('用户名或者密码错误')
                            form.resetFields();
                        }
                        console.log(localStorage.getItem('token'));
                    }}
                >
                    <FormItem
                        field='username'
                        rules={[{
                            validator: (v, cb) => {
                                if (!v) {
                                    return cb('请输入用户名')
                                }
                                cb(null)
                            }
                        }]}
                    >
                        <Input
                            placeholder='username'
                            prefix={<IconUser />}
                        />
                    </FormItem>
                    <FormItem
                        field='password'
                        rules={[{
                            validator: (v, cb) => {
                                if (!v) {
                                    return cb('请输入密码')
                                }
                                cb(null)
                            }
                        }]}
                    >
                        <Input.Password
                            placeholder="passward"

                            prefix={<IconLock />}
                        />
                    </FormItem>
                    <FormItem wrapperCol={{ offset: 7 }} >
                        <Space size={40}>
                            <Button type='outline' htmlType='submit'>登录</Button>
                            <Link to="/register">
                                <Button type='dashed'>新用户注册</Button>
                            </Link>
                        </Space>
                    </FormItem>
                </Form>
                {localStorage.getItem('token') ? (
                    <Navigate to="/home" />
                ) : (
                    <></>
                )}
            </div>

        </>


    )
}
