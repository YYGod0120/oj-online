import React from 'react'
import {
    Button,
    Message,
    Typography,
    Grid,
    Input,
    Select,
    Divider
} from '@arco-design/web-react';
import EditableTable from './TextDataList';
const InputSearch = Input.Search;
const Row = Grid.Row;
const Col = Grid.Col;
export default function TextData() {
    return (
        <div style={{ textAlign: "start" }}>
            <Row style={{ marginBottom: 10 }}>
                <Col><Typography.Title heading={1} style={{ marginTop: 0, color: 'rgb(58, 63, 99)' }}>测试数据</Typography.Title></Col>
            </Row>
            <Row style={{ marginBottom: 20 }}>
                <Col>
                    <InputSearch
                        searchButton='查找'
                        defaultValue=''
                        placeholder='输入题号'
                        style={{ width: 230 }}
                    />
                </Col>

            </Row>
            <Row>
                <Col span={12}>
                    <Typography.Title heading={6} style={{ color: 'rgb(112, 112, 112)' }}>题目标题 :</Typography.Title>
                    <Typography.Paragraph style={{ color: 'rgb(112, 112, 112)' }}>123456</Typography.Paragraph>
                </Col>
                <Col span={12}>
                    <Typography.Title heading={6} style={{ color: 'rgb(112, 112, 112)' }}>题目描述 :</Typography.Title>
                    <Typography.Paragraph style={{ width: 300, color: 'rgb(112, 112, 112)' }} >123456123456123456123456123456123456123456123456123456123456123456</Typography.Paragraph>

                </Col>

            </Row>
            <Divider style={{ borderColor: "rgb(112,112,112)" }} />
            <Row>


            </Row>
            <Row>

                <Col span={24}>
                    <EditableTable></EditableTable>
                </Col>
                {/* <Col span={12}>

                </Col> */}
            </Row>
        </div>
    )
}
