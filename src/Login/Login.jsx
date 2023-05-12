import React from 'react'
import "./Login.css"
import { Form, Input, Button } from '@arco-design/web-react';
const FormItem = Form.Item;
export default function Login() {
    return (
        <div className='login'>
            <Form style={{ width: 600 }} autoComplete='off'>
                <FormItem label='用户名'>
                    <Input placeholder='name' />
                </FormItem>
                <FormItem label='密码'>
                    <Input placeholder='password' />
                </FormItem>
                <FormItem label='确认密码'>
                    <Input placeholder='password' />
                </FormItem>
                <FormItem wrapperCol={{ offset: 5 }}>
                    <Button type='primary'>确认</Button>
                </FormItem>
            </Form>
        </div>

    )
}
