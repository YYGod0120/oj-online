import React, { useState, useEffect } from 'react';
import './Problem.css'
import { Spin, Typography, Grid, Statistic } from '@arco-design/web-react';
import { useParams } from "react-router-dom";
const Col = Grid.Col
const Row = Grid.Row
const url = 'http://47.108.221.20:2333/problem/search'
const getData = async function (url, body) {
    const rep = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });
    const data = await rep.json()

    console.log(data);
    return data
}
const { Title, Paragraph } = Typography;
export default function Problem() {
    const { id } = useParams()
    const problem_id = id - 0
    const [problem, setProblem] = useState(null)
    useEffect(() => {
        const fetchPro = async () => {
            const problem = await getData(url, {
                problem_id: problem_id,

            })

            console.log(problem);
            setProblem(problem.data[0])
        }
        fetchPro()
    }, [problem_id])

    function level(l) {
        if (l === '容易' || l === '极易') {
            return 'easy'
        } else if (l === '困难' || l === '极难') {
            return 'hard'
        } else {
            return 'mid'
        }
    }
    return (
        <>
            {
                !problem ? (
                    <Spin size={40}></Spin>
                ) : (

                    <Typography>
                        <Row>
                            <Col>
                                <Title style={{ textAlign: 'start', marginLeft: 20 }}>{problem.title}</Title>
                                <Paragraph className={level(problem.level)} style={{ textAlign: 'start', marginLeft: 20 }}>难度：{problem.level}</Paragraph>
                                <Paragraph style={{ textAlign: 'start', marginLeft: 20, fontSize: 20 }}>

                                    {problem.description}

                                </Paragraph>
                            </Col>

                        </Row>
                        <Row style={{ marginTop: 30 }}>
                            <Col span={10} offset={1}>
                                <Typography.Title
                                    style={{ textAlign: 'start', fontSize: 24 }}
                                    heading={4}>输入解释：
                                </Typography.Title>
                                <Paragraph style={{ textAlign: 'start', fontSize: 20 }}>
                                    {problem.description_input}
                                </Paragraph>
                            </Col>
                            <Col span={10} offset={1}>
                                <Typography.Title
                                    style={{ textAlign: 'start', fontSize: 24 }}
                                    heading={4}>输出解释：
                                </Typography.Title>
                                <Paragraph style={{ textAlign: 'start', fontSize: 20 }}>
                                    {problem.description_output}
                                </Paragraph>
                            </Col>
                        </Row>

                        <Row >
                            <Col span={10} offset={1}>
                                <Typography.Title
                                    style={{ textAlign: 'start', fontSize: 20 }}
                                    heading={4}>样例输入：
                                </Typography.Title>
                                <Paragraph style={{ textAlign: 'start', fontSize: 20 }}>
                                    {problem.sample_input}
                                </Paragraph>
                            </Col>
                            <Col span={10} offset={1}>
                                <Typography.Title
                                    style={{ textAlign: 'start', fontSize: 20 }}
                                    heading={4}>样例输出：
                                </Typography.Title>
                                <Paragraph style={{ textAlign: 'start', fontSize: 20 }}>
                                    {problem.sample_output}
                                </Paragraph>
                            </Col>
                        </Row >
                        <Row style={{ marginLeft: 25, marginTop: 50 }}>
                            <Col >
                                <Paragraph style={{ textAlign: 'start' }}>
                                    提交数：<Paragraph type='primary'>{problem.submit}</Paragraph>
                                </Paragraph>
                            </Col>
                            <Col >
                                <Paragraph style={{ textAlign: 'start' }}>
                                    通过数：<Paragraph type='success'>{problem.correct}</Paragraph>
                                </Paragraph>
                            </Col>
                        </Row>

                    </Typography >


                )

            }
        </>


    )
}
