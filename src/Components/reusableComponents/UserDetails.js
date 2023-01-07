import React from 'react'
import { AiOutlineCheckSquare } from "react-icons/ai"
import { BsExclamationSquare } from "react-icons/bs"
export default function UserDetails({ name, date, image, message, border, count, icon }) {
    return (
        <div className={`${border && "border-orangeDefault border-r-4"} `} >
            <div className=' px-5 py-3'>
                <div className='flex'>
                    <div className='flex w-full gap-5  justify-start items-center '>
                        <img src={image} className='w-10 h-10 rounded-full mt-2' />
                        <span className={`text-${name === "Odette Walter" ? 'orangeDefault' : "black"} text-2xl whitespace-nowrap font-normal`}>{name} </span>
                    </div>
                    <div className='whitespace-nowrap text-iconGrayDefault text-lg'>{date}
                    </div>
                </div>
                <div className='flex w-full justify-between items-center '>
                    <span className='whitespace-nowrap text-iconGrayDefault flex text-xl justify-between     w-full gap-14 '>
                        <p className='ml-12 truncate'>{message}
                        </p>
                        <div>
                            {count ?
                                <span className='bg-orangeDefault flex justify-center items-center w-7 h-7 rounded-lg' >
                                    <p className='text-[#fff]'>
                                        {count}
                                    </p>
                                </span>
                                : icon && icon === 'checkGreen' ? < AiOutlineCheckSquare className='w-10 h-10 text-greenDefault' /> : icon && icon === 'exclamation' ? < BsExclamationSquare className='w-10 h-10 text-blueDefault' /> : icon && icon === 'checkGray' ? < AiOutlineCheckSquare className='w-10 h-10 text-iconGrayDefault' /> : null
                            }
                        </div>
                    </span>
                </div>
            </div>

            <hr className='text-iconGrayDefault w-full ' />
        </div>
    )
}
