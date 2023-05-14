
import { Form, Input, Button } from '@arco-design/web-react';
import { IconUser, IconLock } from '@arco-design/web-react/icon';
import React from 'react'
import "./Login.css"



const FormItem = Form.Item;
export default function Login() {
    return (
        <>
            <div className='login'>
                <Form style={{ width: 400 }} autoComplete='off'>
                    <FormItem>
                        <Input
                            placeholder='username'
                            prefix={<IconUser />}
                        />
                    </FormItem>
                    <FormItem >
                        <Input.Password
                            placeholder="passward"
                            style={{ width: 400 }}
                            prefix={<IconLock />}
                        />
                    </FormItem>
                    <FormItem wrapperCol={{ offset: 5 }}>
                        <Button type='primary'>登录</Button>
                    </FormItem>
                </Form>
            </div>

        </>


    )
}
