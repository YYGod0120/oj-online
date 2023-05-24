import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
import { Message } from '@arco-design/web-react';

import PerCheck from "./PerCheck";

export default function Check() {

    const [userId, setUserId] = useState(localStorage.getItem('userId'))
    if (!userId) {
        Message.info('请先登录')
    }
    return (
        <>
            {userId !== null ? (
                <div>
                    NewPro
                    <PerCheck userId={userId} />
                </div >
            ) : (
                <Navigate to={"/login"} />
            )
            }
        </>


    )
}
