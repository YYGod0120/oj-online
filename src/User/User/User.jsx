import React, { useEffect, useState } from 'react'
import { Descriptions, Grid, Message, Typography } from "@arco-design/web-react";
import PerCheckSide from '../../Problems/Check/PerCheckSide'
import UserEdit from './UserEdit';
import { IconEdit } from '@arco-design/web-react/icon';
import { Outlet } from 'react-router-dom';
const Row = Grid.Row
const Col = Grid.Col
function genter(number) {
    if (number === 0) {
        return '保密'
    } else if (number === 1) {
        return '男'
    } else {
        return '女'
    }
}
export default function User() {
    const data_start = [
        {
            label: '名字',
            value: '',
        },
        {
            label: 'UID',
            value: '',
        },
        {
            label: '昵称',
            value: '',
        },
        {
            label: '性别',
            value: '',
        },
        {
            label: '生日',
            value: '',
        },
        {
            label: '邮箱',
            value: '',
        },
        {
            label: '正确题目数',
            value: '',
        },
        {
            label: '得分',
            value: '',
        },

    ]
    const [data, setData] = useState(data_start)
    const [isEdit, setIsEdit] = useState(false)
    const handleEditButtonClick = () => {
        setIsEdit(false);
    };
    const url = `http://47.108.221.20:2333/info/get/${localStorage.getItem('userId')}`
    useEffect(() => {
        async function getData(url) {
            try {
                const rep = await (await fetch(url, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })).json()
                console.log(rep.data);
                setData(data_start.map(item => {
                    // 根据需要更新value属性的逻辑
                    if (item.label === '名字') {
                        return { ...item, value: rep.data.name };
                    } else if (item.label === 'UID') {
                        return { ...item, value: rep.data.user_id };
                    } else if (item.label === '昵称') {
                        return { ...item, value: rep.data.nickname };
                    } else if (item.label === '性别') {
                        return { ...item, value: genter(rep.data.gender) };
                    } else if (item.label === '邮箱') {
                        return { ...item, value: rep.data.email };
                    } else if (item.label === '生日') {
                        return { ...item, value: rep.data.year + '/' + rep.data.month + '/' + rep.data.day };
                    } else if (item.label === '正确题目数') {
                        return { ...item, value: rep.data.correct };
                    } else if (item.label === '得分') {
                        return { ...item, value: rep.data.score };
                    }
                }))

            }
            catch (error) {
                Message.info('请登录')
            }
        }


        getData(url)
    }, [])
    return (
        <Row>
            <Col span={6}>
                <PerCheckSide></PerCheckSide>
            </Col>
            <Col span={16} offset={2}>
                <Typography.Title heading={3} style={{ textAlign: 'start', marginBottom: 30 }}>个人信息 <IconEdit onClick={() => {
                    setIsEdit(true)
                }} /></Typography.Title>
                {!isEdit ? (<Descriptions colon=' :' column={2} layout='vertical' data={data} size='large' />
                ) : (
                    <UserEdit user={data} onEidtButtonClick={handleEditButtonClick}></UserEdit>
                )}



            </Col>

        </Row>
    )
}
