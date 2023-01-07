import { React, useEffect, useState } from 'react'
import { TbLayoutDashboard } from "react-icons/tb"
import { MdOutlineEmail } from "react-icons/md"
import { CiUser } from 'react-icons/ci'
import { BsChatLeft } from "react-icons/bs"

import { CiViewColumn } from "react-icons/ci"
import { MdOutlineViewAgenda } from 'react-icons/md'
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { BsLayoutSidebarInset } from 'react-icons/bs'
import { useNavigate, useLocation } from "react-router-dom"

export default function Drawer() {
    const [isToggled, setIsToggled] = useState(true);
    const navigate = useNavigate()
    const location = useLocation()
    var path = location.pathname.slice('/')
    useEffect(() => {
        if (path === '/') {
            navigate("/")
        }
    }, [])
    const toggleState = (isToggled) => {

        setIsToggled(!isToggled)
    }
    return (
        <div> {isToggled === true ?
            <div className="w-full    shadow-2xl grid grid-rows-2  max-h-screen ">
                <div>
                    <hr className='text-grayDefault text-lg font-bold' />
                    <div className='flex justify-start items-center gap-5 p-3 max-h-[50%]'>
                        <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className='rounded-full w-20 h-20 cursor-pointer' />
                        <div className='grid gap-2'>
                            <div className='text-black text-3xl whitespace-nowrap'>Sierra Ferguson</div>
                            <div className='text-iconGrayDefault text-2xl pr-10'>s.ferguson@gmail.com</div>
                        </div>
                    </div>
                    <div className=' '>
                        <div className={`flex  justify-start items-center gap-2  ml-5  cursor-pointer`}>
                            <TbLayoutDashboard className={`w-10 h-10 text-${path === '/dashboard' ? "orangeDefault" : "grayDefault"}`} />
                            <p className={`text-4xl  text-${path === '/dashboard' ? "orangeDefault" : "tableBlackDefault"}`} onClick={() => navigate("/dashboard")}>Dashboard</p>
                        </div>
                        <div className='flex  justify-start items-center gap-2  mt-8  ml-5 cursor-pointer' >
                            <MdOutlineViewAgenda className={`w-10 h-10  text-${path === '/tasks' ? "orangeDefault" : "grayDefault"}`} />
                            <p className={` text-4xl  text-${path === '/tasks' ? "orangeDefault" : "tableBlackDefault"}  `} onClick={() => navigate("/tasks")} >Tasks</p>
                        </div>
                        <div className='flex  justify-start items-center gap-2  mt-8  ml-5 cursor-pointer'>
                            < MdOutlineEmail className={`w-10 h-10 text-${path === '/emails' ? "orangeDefault" : "grayDefault"}`} />
                            <p className={`text-4xl w-10 h-10  text-${path === '/emails' ? "orangeDefault" : "tableBlackDefault"}`} onClick={() => navigate("/emails")} >Emails</p>
                        </div>
                        <div className='flex  justify-start items-center gap-2  mt-8  ml-5 cursor-pointer'>
                            <CiUser className={`w-10 h-10  font-extrabold  text-${path === '/members' ? "orangeDefault" : "grayDefault"} `} />
                            <p className={`text-4xl text-${path === '/members' ? "orangeDefault" : "tableBlackDefault"}`} onClick={() => navigate("/members")}>Members</p>
                        </div>
                        <div className='flex  justify-start items-center gap-2  mt-8  ml-5 cursor-pointer'>
                            <BsChatLeft className={`w-10 h-10 text-${path === '/chats' ? "orangeDefault" : "grayDefault"}`} />
                            <p className={`w-10 h-10 text-4xl text-${path === '/chats' ? "orangeDefault" : "tableBlackDefault"}`} onClick={() => navigate("/chats")}>Chats</p>
                        </div>
                        <div className='flex  justify-start items-center gap-2  mt-8  ml-5 cursor-pointer'>
                            <CiViewColumn className={`w-10 h-10 text-${path === '/deals' ? "orangeDefault" : "grayDefault"}  `} />
                            <p className={`text-4xl text-${path === '/deals' ? "orangeDefault" : "tableBlackDefault"}`} onClick={() => navigate("/deals")}>Deals</p>
                        </div>
                    </div>
                </div>
                <div className=' mt-20' >
                    <hr className='  text-grayDefault text-lg font-bold' />
                    <div className='flex  h-[80%] flex-col  justify-between  '>
                        <div className='flex  justify-start items-center gap-2 mt-5   ml-5 cursor-pointer'>
                            <BiDotsHorizontalRounded className={`w-10 h-10 text-${path === '/settings' ? "orangeDefault" : "grayDefault"}`} />
                            <p className={`text-4xl text-${path === '/settings' ? "orangeDefault" : "tableBslackDefault"}`} onClick={() => { navigate("/settings") }}>Settings</p>
                        </div>
                        <div className=' flex gap-2   ml-5 cursor-pointer ' onClick={() => toggleState(isToggled)} >
                            <BsLayoutSidebarInset className="w-10 h-10  text-grayDefault" />
                            <p className='text-4xl '>Toggle Sidebar</p>
                        </div>
                    </div>
                </div>
            </div >
            :

            <div className="min-w-[40%]   shadow-2xl grid grid-rows-2  max-h-screen  ">
                <div className='px-5 flex  flex-col justify-st'>
                    <hr className='text-grayDefault text-lg font-bold' />

                    <div className='flex justify-start items-center gap-5 p-3 max-h-[50%]'>
                        <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className='rounded-full w-20 h-20 cursor-pointer' />
                    </div>

                    <div className=' max-h-full '>

                        <div className='flex  justify-start items-center gap-2  text-orangeDefault ml-5'>
                            <TbLayoutDashboard className={`w-10 h-10 text-${path === '/dashboard' ? "orangeDefault" : "grayDefault"} cursor-pointer`} onClick={() => navigate("/dashboard")} />
                        </div>

                        <div className='flex  justify-start items-center gap-2  mt-8  ml-5' >
                            <MdOutlineViewAgenda className={`w-10 h-10 text-${path === '/tasks' ? "orangeDefault" : "grayDefault"} cursor-pointer `} onClick={() => navigate("/tasks")} />

                        </div>

                        <div className='flex  justify-start items-center gap-2  mt-8  ml-5'>
                            < MdOutlineEmail className={`w-10 h-10 text-${path === '/emails' ? "orangeDefault" : "grayDefault"} cursor-pointer `} onClick={() => navigate("/emails")} />

                        </div>
                        <div className='flex  justify-start items-center gap-2  mt-8  ml-5'>
                            <CiUser className={`w-10 h-10 text-${path === '/members' ? "orangeDefault" : "grayDefault"} cursor-pointer `} onClick={() => navigate("/members")} />

                        </div>
                        <div className='flex  justify-start items-center gap-2  mt-8  ml-5'>
                            <BsChatLeft className={`w-10 h-10 text-${path === '/chats' ? "orangeDefault" : "grayDefault"} cursor-pointer `} onClick={() => navigate("/chats")} />

                        </div>
                        <div className='flex  justify-start items-center gap-2  mt-8     ml-3 cursor-pointer ' onClick={() => navigate("/deals")}>
                            <CiViewColumn className={`w-[54px] h-[54px] text-${path === '/deals' ? "orangeDefault" : "grayDefault"}  `} />
                        </div>
                    </div>
                </div>

                <div className='px-5'  >
                    <hr className='  text-grayDefault text-lg font-bold mt-16' />
                    <div className='flex  h-[78%] flex-col  justify-between  '>
                        <div className='flex  justify-start items-center gap-2 my-8    ml-5'>
                            <BiDotsHorizontalRounded className={`w-10 h-10  cursor-pointer text-${path === '/settings' ? "orangeDefault" : "grayDefault"} `} onClick={() => navigate("/settings")} />
                        </div>

                        <div className=' flex gap-2  mb-10 ml-5 ' >
                            <BsLayoutSidebarInset className={`w-10 h-10   text-${isToggled === false ? "orangeDefault" : "black"} cursor-pointer `} onClick={() => toggleState(isToggled)} />
                        </div>
                    </div>
                </div>
            </div >
        }</div >
    )

}








