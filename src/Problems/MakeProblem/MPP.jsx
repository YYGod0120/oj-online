import React from 'react'
import { Button, Space } from '@arco-design/web-react';
export default function MPP({ userId }) {
    const url = 'http://47.108.221.20:2333/problem/add'
    const handleSubmit = async function (url, body) {

        const rep = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body:
                JSON.stringify(body)
        })
        const data = await rep.json()
        console.log(data);
        return data
    }
    return (
        <Button type='primary' onClick={() => {
            console.log('等等');
        }}>提交题目</Button>
    )
}
