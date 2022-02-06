import React, { useEffect, useState } from "react"
// import dioseropic from '../..' //! Su valor nunca se lee

function Eldioserocard() {
  const [dioseroscrollpos, setdioseroscrollpos] = useState(0)

  useEffect(() => {
    setdioseroscrollpos(localStorage.getItem(`eldiosero` + "percent"))
  }, [])

  // ! El uso exvesivo de DIVs hace que el código sea difícil de leer
  return (
    <div>
      <div className="max-w-md w-full lg:flex m-2">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: "url('/Media/eldiosero.jpg')" }}
        ></div>
        <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-grey-dark flex items-center">
              <svg
                className="text-grey w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-black font-bold text-xl mb-2">El diosero</div>
            <p id="book1" className="text-grey-darker text-base">
              {dioseroscrollpos}%
            </p>
          </div>
          <div className="object-scale-down h-35 w-full">
            <img className="w-10 h-10 rounded-full mr-4 mb-2" src="/Media/eldiosero.jpg" alt="" />
            <div className="text-sm">
              <p className="text-black leading-none">Francisco Rojas González</p>
              <p className="text-grey-dark">10 March 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eldioserocard
