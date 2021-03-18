import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import KenshuuiCard from '../Cards/KenshuuiCard'
import Hp2escard from '../Cards/Hp2escard'
import Eldioserocard from '../Cards/Eldioserocard'

function Bookshelf() {
    
    return (
        <div className="">
            <Header />
                <div className="pt-24 pl-10">

                
                    <div className="flex">
                        <Link to="/KenshuuiShow">
                            <KenshuuiCard />
                        </Link>
                        <Link to="/Hp2esShow">
                            <Hp2escard />
                        </Link>
                        <Link to="/eldiosero">
                            <Eldioserocard />
                        </Link>
                    </div>
                
            </div>
        </div>
    )
}

export default Bookshelf
