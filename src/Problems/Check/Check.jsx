import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
import { Message, Divider } from '@arco-design/web-react';

import PerCheck from "./PerCheck";
import PerCheckSide from "./PerCheckSide";
import { Grid } from '@arco-design/web-react';
const Row = Grid.Row;
const Col = Grid.Col;
export default function Check() {

    const [userId, setUserId] = useState(localStorage.getItem('userId'))
    if (!userId) {
        Message.info('请先登录')
    }
    return (
        <>
            {userId !== null ? (
                <Row style={{ marginTop: 48 }} gutter={50}>
                    <Col span={7}>
                        <PerCheckSide />
                        <Divider style={{ backgroundColor: '#daf232' }} type='vertical' />
                    </Col>
                    <Col span={16}>
                        <PerCheck userId={userId} />
                    </Col>

                </Row >
            ) : (
                <Navigate to={"/login"} />
            )
            }
        </>


    )
}
