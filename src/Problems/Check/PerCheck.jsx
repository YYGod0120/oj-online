import React from 'react'
import './CheckList'
import { Grid, Typography, Input } from '@arco-design/web-react';
const Row = Grid.Row;
const Col = Grid.Col;
const InputSearch = Input.Search;

export default function PerCheck({ userId }) {
    return (
        <>
            <Row>
                <Col span={12} style={{ textAlign: 'start', color: '#3a3f63', fontSize: 28 }}>
                    测评记录
                </Col>
                <Col span={12}>
                    <InputSearch
                        searchButton='搜索'
                        defaultValue=''
                        placeholder='请输入题号'
                        style={{ width: 300, textAlign: 'end' }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>

                </Col>
            </Row>
        </>
    )
}
