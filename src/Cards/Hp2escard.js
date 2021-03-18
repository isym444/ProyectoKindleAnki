import React, {useEffect, useState} from 'react'

function Hp2escard() {

    const [hpscrollpos, sethpscrollpos] = useState(0)

    useEffect(() => {
        sethpscrollpos(localStorage.getItem(`Hp2es`+'Showpercent'));
    }, [])
    
    return (
        <div>
            <div className="max-w-md w-full lg:flex m-2">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/Media/hp2espa.jpg')"}}>
                </div>
                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-grey-dark flex items-center">
                    <svg className="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                    </p>
                    <div className="text-black font-bold text-xl mb-2">Harry Potter</div>
                    <p id="book1" className="text-grey-darker text-base">{hpscrollpos}%</p>
                </div>
                <div className="object-scale-down h-35 w-full">
                    <img className="w-10 h-10 rounded-full mr-4 mb-2" src="/Media/hp2espa.jpg" alt=""/>
                    <div className="text-sm">
                    <p className="text-black leading-none">J.K. Rowling</p>
                    <p className="text-grey-dark">26 Feb 2021</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hp2escard
