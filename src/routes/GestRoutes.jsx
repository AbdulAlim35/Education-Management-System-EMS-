import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../features/auth/pages/Login"

export default function GestRoutes () {
    return(
        <Routes>
            <Route index element={<Login/>} />

       
        </Routes>
    )
}