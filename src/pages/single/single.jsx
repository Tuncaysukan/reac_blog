import React from 'react'
import Sidebar from '../../Component/Sidebar/sidebar'
import Singlepost from '../../Component/singlePost/singlepost'
import './single.css'

export default function single() {
    return (
        <div className="single">
            <Singlepost/>
            <Sidebar/>
        </div>
    )
}
