import React, { useState, useEffect } from 'react';
import { Grid, Typography, Input, Table, Message } from '@arco-design/web-react';
import { getProblem_id, columns } from './CheckList';
import './MyCheck.css'
const Row = Grid.Row;
const Col = Grid.Col;
const InputSearch = Input.Search;
const problem_id_url = "http://47.108.221.20:2333/submission/search";

export default function PerCheck({ userId }) {
    const user_id = userId - 0;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isRight, setIsRight] = useState('')
    useEffect(() => {
        getData();
    }, [user_id]);

    async function getData() {
        setLoading(true);
        try {
            const result = await getProblem_id(problem_id_url, { user_id: user_id });
            setIsRight(result.status === '正确' ? 'right' : 'error');
            setData(result);
            console.log(result);
        } catch (error) {
            // 处理错误情况
            Message.error("获取数据时出错:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleSearch = async (value) => {
        setLoading(true);
        try {
            const result = await getProblem_id(problem_id_url, {
                user_id: user_id,
                problem_id: parseInt(value)
            });
            setData(result);
        } catch (error) {
            // 处理错误情况
            console.error("搜索数据时出错:", error);
        } finally {
            setLoading(false);
        }
    };

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
                        onSearch={handleSearch}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    {loading ? (
                        <Typography.Text>Loading...</Typography.Text>
                    ) : (
                        <Table className={`${isRight} myTable`} columns={columns} data={data} />
                    )}
                </Col>
            </Row>
        </>
    );
}
