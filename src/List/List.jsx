import React from 'react'
import "./List.css"
import { Table } from '@arco-design/web-react';
import { columns, data } from "./ListNumber"
import { Input, Space } from '@arco-design/web-react';
const InputSearch = Input.Search;

export default function List() {
    return (
        <div className={'list'}>
            <Table columns={columns} data={data} border={{
                wrapper: true,
                headerCell: true,
            }}
                pagination={{ pageSize: 40 }}
                pagePosition='bottomCenter'
            />
            <Space wrap>

                <InputSearch
                    searchButton
                    defaultValue=''
                    placeholder='输入标题或者题号'
                    style={{ width: 300 }}
                // loading
                />

            </Space>
        </div>

    )
}
