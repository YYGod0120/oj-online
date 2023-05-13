import React from 'react'
import { Table } from '@arco-design/web-react';
import { columns, data } from "./ListNumber"
export default function List() {
    return (
        <Table columns={columns} data={data} />
    )
}
