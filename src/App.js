import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/detail" element={<Detail />}></Route>
                        <Route exact path="/login" element={<Login />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;