
import { Form, Input, Button } from '@arco-design/web-react';
import React from 'react'
import "./Login.css"



const FormItem = Form.Item;
export default function Login() {
    return (
        <>
            <div className='login'>
                <Form style={{ width: 400 }} autoComplete='off'>
                    <FormItem label='用户名'>
                        <Input placeholder='name' />
                    </FormItem>
                    <FormItem label='密码'>
                        <Input placeholder='password' />
                    </FormItem>
                    <FormItem wrapperCol={{ offset: 5 }}>
                        <Button type='primary'>登录</Button>
                    </FormItem>
                </Form>
            </div>

        </>


    )
}
