import { Form, Input, Button, Message } from '@arco-design/web-react';
import React from 'react'
import "./Register.css"



const FormItem = Form.Item;
export default function Login() {
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
                    <FormItem field='name' rules={[{ required: true, message: '请输入用户名' }]}>
                        <Input placeholder='请输入用户名' />
                    </FormItem>
                    <FormItem field='password' rules={[{ required: true, message: '请输入密码' }]}>
                        <Input placeholder='请输入密码' />
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
                                }
                                cb(null)
                            }
                        }]}
                    >
                        <Input placeholder='请确认密码' />
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