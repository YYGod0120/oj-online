import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Message, Space, Grid } from '@arco-design/web-react';
import MakeProSide from './MakeProSide';
import MPP from './MakeProMain'
import './MPP.css'
const Row = Grid.Row;
const Col = Grid.Col;
export default function MakeProblem() {
    const [admId, setAdmId] = useState(localStorage.getItem('admId'))
    console.log(admId);
    if (admId === null) {
        Message.info('你没有此权限')
    }
    return (
        <>
            {admId !== null ? (
                <Row style={{ marginTop: 48 }} gutter={50}>
                    <Col span={7}>
                        <MakeProSide></MakeProSide>
                    </Col>
                    <Col span={16}>
                        <Outlet></Outlet>
                    </Col>
                </Row>

            ) : (
                <Navigate to={"/home"} />
            )
            }
        </>
    )
}
