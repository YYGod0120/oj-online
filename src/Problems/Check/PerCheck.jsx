import React, { useState, useEffect } from 'react'
import { getProblem_id, columns } from './CheckList'
import { Grid, Typography, Input, Table } from '@arco-design/web-react';
const Row = Grid.Row;
const Col = Grid.Col;
const InputSearch = Input.Search;
const problem_id_url = "http://47.108.221.20:2333/submission/search";
export default function PerCheck({ userId }) {
    const user_id = userId - 0
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            let data = await getProblem_id(user_id, problem_id_url)
            setData(data)
            console.log(data);
        }
        getData()
    }, [user_id])

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
                    <Table columns={columns} data={data} />;
                </Col>
            </Row>
        </>
    )
}
