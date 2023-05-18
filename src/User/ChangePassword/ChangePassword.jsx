import React from 'react'
import { Form, Input, Button, Message } from '@arco-design/web-react';
import { IconUser, IconLock } from '@arco-design/web-react/icon';
import "../Register/Register.css"

export default function ChangePassword() {
    const FormItem = Form.Item;
    const [form] = Form.useForm()
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
                onSubmit={(v) => {
                    console.log(v);
                    Message.success('success');
                }}
            >
                <FormItem field='name' rules={[{ required: true, message: '旧密码' }]}>
                    <Input
                        placeholder='旧密码'
                        prefix={<IconLock />}
                    />
                </FormItem>
                <FormItem field='password' rules={[{ required: true, message: '新密码' }]}>
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
                            } else if (form.getFieldValue('password') !== v) {
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
