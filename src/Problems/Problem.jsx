import React from 'react'
import { useParams } from "react-router-dom";
const url = ''
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

export default function Promblem() {
    const { id } = useParams()
    const pro = getData(url, {
        method: 'POST',
        body: JSON.stringify({
            problem_id: id,
        })
    })
    const problem = getData()
    return (
        <div>{id}</div>
    )
}
