import React from 'react'
import { Descriptions, Grid, Typography } from "@arco-design/web-react";
import PerCheckSide from '../../Problems/Check/PerCheckSide'
const Row = Grid.Row
const Col = Grid.Col
const data = [
    {
        label: '名字',
        value: 'YY',
    },
    {
        label: 'UID',
        value: 2,
    },
    {
        label: '昵称',
        value: 'YYGod',
    },
    {
        label: '性别',
        value: '男',
    },
    {
        label: '生日',
        value: '2003/01/20',
    },
    {
        label: '邮箱',
        value: '2569630663@qq.com',
    },
    {
        label: '正确题目数',
        value: 3,
    },
];

export default function User() {
    return (
        <Row>
            <Col span={6}>
                <PerCheckSide></PerCheckSide>
            </Col>
            <Col span={16} offset={2}>
                <Typography.Title heading={3} style={{ textAlign: 'start', marginBottom: 30 }}>个人信息</Typography.Title>
                <Descriptions colon=' :' column={2} layout='vertical' data={data} size='large' />;
            </Col>

        </Row>
    )
}
