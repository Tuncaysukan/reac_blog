import React from 'react'
import Header from '../../Component/Header/Header';
import Posts from '../../Component/Posts/Posts';
import Sidebar from '../../Component/Sidebar/sidebar';

import './Home.css'

export default function Home() {
    return (
        <>
            <Header/>
            <div className="home">
            <Posts/>
            <Sidebar />
            </div>
        </>
    )
}
