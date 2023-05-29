import React from 'react'
import { Button, Table, Input, Select, Form, Grid, Message, Typography } from '@arco-design/web-react';
import EditableTable from './MyProblemList';
const Row = Grid.Row
const Col = Grid.Col
export default function MyPro(id) {
    const user_id = id - 0
    return (
        <>
            <Row>
                <Col>
                    <Typography.Title heading={1} style={{ marginTop: 0, color: 'rgb(58, 63, 99)', textAlign: 'start' }}>我的题目</Typography.Title>
                </Col>
            </Row>
            <Row>
                <Col>
                    <EditableTable id={user_id} />
                </Col>
            </Row>
        </>


    )
}
