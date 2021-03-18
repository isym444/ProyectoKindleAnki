import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className="bg-gray-800 font-bold text-xl text-white p-3 pt-3 pb-3 fixed w-full"/* className="bg-gray-800 p-2 fixed w-full" */>
            <div className="space-x-6 inline-flex">
            {/* <img src="/Media/skull.png" className="h-8 w-8 ml-8 mx-2" alt="skull"/> */}
            <Link to="/">Dashboard</Link>
            <Link to="/bookshelf">Library</Link>
            </div>
        </div>
    )
}