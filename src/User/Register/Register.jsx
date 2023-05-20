import { Form, Input, Button, Message } from '@arco-design/web-react';
import { IconUser, IconLock } from '@arco-design/web-react/icon';
import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Register.css"




const FormItem = Form.Item;
const url = 'http://47.108.221.20:2333/user/register'
function startsWithLetter(str) {
    const firstChar = str.charAt(0);
    return /[A-Z]/i.test(firstChar);
}
const register = async function (url, body) {
    const rep = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    return await rep.json()


}
export default function Register() {
    const regex =
        /(?:')|(?:--)|\/\*(?:.|[\n\r])*?\*\/|\b(select|update|and|or|delete|insert|trancate|char|chr|into|substr|ascii|declare|exec|count|master|into|drop|execute)\b/i;

    const regexSpace = /\s/;
    const [form] = Form.useForm()
    const navigate = useNavigate();
    return (
        <>
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
                        const rep = await register(url,
                            {
                                "username": v.name,
                                "password": v.password
                            }
                        )
                        console.log(rep);
                        if (rep.status === 200) {
                            Message.success('注册成功')

                            navigate("/login", {
                                replace: false
                            })
                        } else {
                            Message.error('注册用户已存在')
                        }
                    }}
                >
                    <FormItem field='name' rules={[{
                        validator: (v, cb) => {
                            if (!v) {
                                return cb('请输入用户名')
                            } else if (v.length > 12) {
                                return cb('用户名需要小于12')
                            } else if (regex.test(form.getFieldValue('name'))) {
                                return cb('包含非法字符！')
                            } else if (regexSpace.test(form.getFieldValue('name'))) {
                                return cb('不能含有空格')
                            } else if (!startsWithLetter(form.getFieldValue('name'))) {
                                return cb('请以字母开头')
                            }
                            cb(null)
                        }
                    }]}>
                        <Input
                            placeholder='请输入用户名'
                            prefix={<IconUser />}
                        />
                    </FormItem>
                    <FormItem field='password' rules={[{
                        validator: (v, cb) => {
                            if (!v) {
                                return cb('请确认密码')
                            } else if (v.length < 6) {
                                return cb('密码至少要大于6')
                            } else if (regex.test(form.getFieldValue('password'))) {
                                return cb('包含非法字符！')
                            } else if (regexSpace.test(form.getFieldValue('password'))) {
                                return cb('不能含有空格')
                            }
                            cb(null)
                        }
                    }]}>
                        <Input.Password
                            placeholder="请输入密码"
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
                                } else if (form.getFieldValue('password') !== v) {
                                    return cb('密码不一致')
                                } else if (v.length < 6) {
                                    return cb('密码至少要大于6')
                                } else if (regex.test(form.getFieldValue('password'))) {
                                    return cb('包含非法字符！')
                                } else if (regexSpace.test(form.getFieldValue('password'))) {
                                    return cb('不能含有空格')
                                }
                                cb(null)
                            }
                        }]}
                    >
                        <Input.Password
                            prefix={<IconLock />}
                            placeholder="请确认密码"
                        />
                    </FormItem>
                    <FormItem>
                        <Button type='primary' htmlType='submit' long onClick={() => {

                        }}>
                            注册
                        </Button>
                    </FormItem>
                </Form>
            </div>

        </>


    )
}