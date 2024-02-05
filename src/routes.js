import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

import Orders from "./Pages/Order";


function MyRoutes() {

    return (
        <Router>
            <Routes>
            <Route path="/" Component={Home} />
            <Route path="/pedidos" Component={Orders} />
        </Routes>
        </Router>
            )
}

            export default MyRoutes