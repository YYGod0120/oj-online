import React, { useState } from "react";
import { Navigate } from 'react-router-dom'

export default function Percheck({ token }) {


    return (
        <>
            {token !== null ? (
                <div>NewPro</div >) :
                (<Navigate to={"/login"} />)
            }
        </>


    )
}
