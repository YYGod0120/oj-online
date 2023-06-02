import React, { useState, useEffect } from 'react';
import "./List.css";
import { Table } from '@arco-design/web-react';
import { columns } from "./ListNumber";
import { Input, Select } from '@arco-design/web-react';
import { Grid } from '@arco-design/web-react';
import { json } from 'react-router-dom';
const Row = Grid.Row;
const Col = Grid.Col;

const InputSearch = Input.Search;
const url = 'http://47.108.221.20:2333/problem/search';

const getData = async function (url, body) {
    const rep = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });
    const data0 = await rep.json();
    console.log(data0.data);
    return data0.data;
}

export default function List() {
    const [data, setData] = useState([]); // 初始化 data 状态为一个空数组
    const [searchText, setSearchText] = useState({}); // 初始化 searchText 状态为一个空字符串
    const [searchTextBefore, setSearchTextBefore] = useState('keyword')
    function handleSelectChange(value) {
        console.log(value);
        setSearchTextBefore(value)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData(url, JSON.stringify(searchText)); // 调用 getData 函数获取数据，传递 searchText 作为 body 参数
                setData(result); // 更新 data 状态
                console.log(result);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // 调用 fetchData 函数来获取数据并更新状态
    }, [searchText]); // 传入 searchText 作为依赖项，确保 useEffect 在 searchText 变化时执行



    return (
        <div style={{ width: '100%', marginTop: '40px' }}>
            <Row >
                <Col span={5} offset={13} style={{ marginBottom: 10 }}>
                    <Input.Group compact>
                        <Select defaultValue='关键词' bordered={false} style={{ width: '35%' }} onChange={handleSelectChange}>
                            <Select.Option value='problem_id'>题目编号</Select.Option>
                            <Select.Option value='user_id'>出题者</Select.Option>
                            <Select.Option value='level'>难度</Select.Option>
                            <Select.Option value='keyword'>关键词</Select.Option>
                        </Select>
                        <InputSearch
                            searchButton
                            defaultValue=''
                            placeholder={`${searchTextBefore}`}
                            style={{ width: '65%' }}
                            onSearch={(event) => {

                                if (searchTextBefore === 'problem_id' || searchTextBefore === 'user_id') {
                                    setSearchText({
                                        [searchTextBefore]: event - 0
                                    })
                                } else {
                                    setSearchText({
                                        [searchTextBefore]: event
                                    })
                                }
                                console.log(searchText);
                            }} // 添加点击事件处理函数
                        />
                    </Input.Group>
                </Col>

            </Row>
            <Row justify='center'>
                <Col></Col>
                <Col span={16} offset={2}>
                    <Table

                        columns={columns}
                        data={data} // 使用 data 状态作为 Table 的 data 属性值
                        border={{
                            wrapper: true,
                            headerCell: true,
                        }}
                        size='large'
                        pagination={{ pageSize: 20 }}
                        pagePosition='bottomCenter'


                    />
                </Col>

            </Row>



        </div>


    );
}

