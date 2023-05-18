
import { Form, Input, Button, Space } from '@arco-design/web-react';
import { IconUser, IconLock } from '@arco-design/web-react/icon';
import React from 'react'
import { Link } from "react-router-dom";
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

                            prefix={<IconLock />}
                        />
                    </FormItem>
                    <FormItem wrapperCol={{ offset: 7 }}>
                        <Space size={40}>
                            <Button type='outline'>登录</Button>
                            <Link to="/register">
                                <Button type='dashed'>新用户注册</Button>
                            </Link>
                        </Space>


                    </FormItem>

                </Form>
            </div>

        </>


    )
}
