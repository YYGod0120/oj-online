import { Form, Input, Button, Message } from '@arco-design/web-react';
import { IconUser, IconLock } from '@arco-design/web-react/icon';
import React from 'react'
import "./Register.css"




const FormItem = Form.Item;
function startsWithLetter(str) {
    const firstChar = str.charAt(0);
    return /[A-Z]/i.test(firstChar);
}
export default function Register() {
    const regex =
        /(?:')|(?:--)|\/\*(?:.|[\n\r])*?\*\/|\b(select|update|and|or|delete|insert|trancate|char|chr|into|substr|ascii|declare|exec|count|master|into|drop|execute)\b/i;

    const regexSpace = /\s/;
    const [form] = Form.useForm()
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
                    onSubmit={(v) => {
                        console.log(v);
                        Message.success('success');
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
                        <Button type='primary' htmlType='submit' long>
                            注册
                        </Button>
                    </FormItem>
                </Form>

            </div>

        </>


    )
}