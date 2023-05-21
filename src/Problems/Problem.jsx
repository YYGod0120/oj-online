import React, { useState, useEffect } from 'react';
import { Spin, Typography } from '@arco-design/web-react';


import { useParams } from "react-router-dom";
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
const { Title, Paragraph, Text } = Typography;
export default function Problem() {
    const { id } = useParams()
    const [problem, setProblem] = useState(null)
    useEffect(() => {
        const fetchPro = async () => {
            const problem = await getData(url, {
                method: 'POST',
                body: JSON.stringify({
                    problem_id: id,
                })
            })
            console.log(problem.data[0]);
            setProblem(problem.data[0])
        }
        fetchPro()
    }, [id])


    return (
        <>
            {
                !problem ? (
                    <Spin size={40}></Spin>
                ) : (

                    <Typography>

                        <Title>{problem.title}</Title>
                        <Paragraph style={{ textAlign: 'start', marginLeft: 20 }}>
                            {problem.description}A design is a plan or specification for the construction
                            of an object or system or for the implementation of an activity or process, or the resu
                            lt of that plan or specification in the form of a prototype, product or process. The ver
                            b to design expresses the process of developing a design. In some cases, the direct construction of an object without an explicit prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be considered to be a design activity.
                        </Paragraph>
                        <Typography.Title
                            style={{ textAlign: 'start', marginLeft: 20, marginTop: 70 }}
                            heading={4}>输入：
                        </Typography.Title>
                        <Paragraph code style={{ textAlign: 'start', marginLeft: 20, fontSize: 24 }}>
                            {problem.description_input}
                        </Paragraph>
                        <Typography.Title
                            style={{ textAlign: 'start', marginLeft: 20, marginTop: 40 }}
                            heading={4}>输出：
                        </Typography.Title>
                        <Paragraph code style={{ textAlign: 'start', marginLeft: 20, fontSize: 24 }}>
                            {problem.description_output}
                        </Paragraph>
                        <Typography.Title
                            style={{ textAlign: 'start', marginLeft: 20, marginTop: 80, }}
                            heading={4}>样例输入：
                        </Typography.Title>
                        <Paragraph code style={{ textAlign: 'start', marginLeft: 20, fontSize: 24 }}>
                            {problem.sample_input}
                        </Paragraph>
                        <Typography.Title
                            style={{ textAlign: 'start', marginLeft: 20, marginTop: 40 }}
                            heading={4}>样例输出：
                        </Typography.Title>
                        <Paragraph code style={{ textAlign: 'start', marginLeft: 20, fontSize: 24 }}>
                            {problem.sample_output}
                        </Paragraph>
                    </Typography>


                )

            }
        </>


    )
}
