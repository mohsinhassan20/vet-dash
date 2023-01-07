import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { VscBellDot } from "react-icons/vsc"
export default function SearchInputField() {
    return (
        <div className="flex  shadow-2xl justify-between items-center">
            <div className='px-5 pt-4 pb-2 text-orangeDefault font-Popins text-2xl shadow-2xl  '>Baropet</div>
            <input type="text" className='w-[80%] mx-10 p-2 shadow-2xl' placeholder="&#xF002; search users" />
            <VscBellDot className="text-blue-200 mr-6 w-6 h-6" />
        </div>
    )
}
