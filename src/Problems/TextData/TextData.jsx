import React, { useState } from 'react'
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
    const [problem, setProblem] = useState({
        title: '',
        description: ''
    })

    async function get_problem(id) {
        try {
            const response = await fetch('http://47.108.221.20:2333/problem/search', {
                method: 'POST',
                body: JSON.stringify({
                    problem_id: id - 0
                })
            });

            if (!response.ok) {
                Message.error('题目不存在')
            }

            const data = await response.json();
            console.log(data.data[0]);
            setProblem(data.data[0]);
            return data.data[0];
        } catch (error) {
            console.error('发生错误:', error);
            // 在此处进行错误处理，例如显示错误提示或执行其他逻辑
        }
    }
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
                        onSearch={(v) => {
                            get_problem(v)
                        }}
                    />
                </Col>

            </Row>
            <Row>
                <Col span={12}>
                    <Typography.Title heading={6} style={{ color: 'rgb(112, 112, 112)' }}>题目标题 :</Typography.Title>
                    <Typography.Paragraph style={{ color: 'rgb(112, 112, 112)' }}>{problem.title}</Typography.Paragraph>
                </Col>
                <Col span={12}>
                    <Typography.Title heading={6} style={{ color: 'rgb(112, 112, 112)' }}>题目描述 :</Typography.Title>
                    <Typography.Paragraph style={{ width: 300, color: 'rgb(112, 112, 112)' }} >{problem.description}</Typography.Paragraph>

                </Col>

            </Row>
            <Divider style={{ borderColor: "rgb(112,112,112)" }} />
            <Row>


            </Row>
            <Row>

                <Col span={24}>
                    <EditableTable p_id={problem.problem_id}></EditableTable>
                </Col>

            </Row>
        </div>
    )
}
