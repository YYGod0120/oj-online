import React, { useState } from "react";
import { Navigate } from 'react-router-dom'
import PerCheck from "./PerCheck";

export default function Check() {

    const [userId, setUserId] = useState(localStorage.getItem('userId'))

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
