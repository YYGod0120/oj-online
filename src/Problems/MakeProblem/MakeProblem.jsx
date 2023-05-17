import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import MPP from './MPP'

export default function MakeProblem() {
    const [admId, setAdmId] = useState(localStorage.getItem('admId'))

    return (
        <>
            {admId !== null ? (
                <div>
                    NewPro
                    <MPP userId={admId} />
                </div >
            ) : (
                <Navigate to={"/home"} />
            )
            }
        </>
    )
}
