import React from 'react'
import MyCharts from "../charts/Charts"
import PieChart from "../pieChart/PieChart"
import { MdModeEdit, MdArrowDropDown } from "react-icons/md"
import { FaTrash } from "react-icons/fa"
import { BiCircle } from "react-icons/bi"
export default function SummarySection() {
    return (
        <div className='  grid  grid-cols-2 gap-0 h-full p-8 '>

            <div className=''>
                <div className='left side   w-full flex justify-between  items-stretch  '>
                    <p className='text-2xl font-semibold '>8 task completed out of 10 </p>
                    <div className='flex justify-start items-center gap-2 '><span className='text-iconGrayDefault text-2xl'>show :</span><span className='flex justify-start items-center text-2xl text-orangeDefault'> This week<MdArrowDropDown className='text-iconGrayDefault w-10 h-10 cursor-pointer' /> </span></div>

                </div>
                <div className='filling-bar w-11/12  mx-10  my-5 bg-grayDefault rounded-lg'>
                    <div className='bg-greenDefault w-11/12 p-2 relative  rounded-lg'>
                    </div>
                </div>
                <div >
                    <p className='text-2xl font-semibold px-2 py-5'>23 December, Sunday</p>
                    <div className='Week View p-2  '>
                        <div className='days flex w-full   justify-evenly text-3xl cursor-pointer'>
                            <p className='text-tableGray'>Sun</p>
                            <p className='text-orangeDefault'>Mon</p>
                            <p className='text-tableGray'>  Tue</p>
                            <p className='text-tableGray'>Wed</p>
                            <p className='text-tableGray'>Thu</p>
                            <p className='text-tableGray'>Fri</p>
                            <p className='text-tableGray'>Sat</p>

                        </div>
                        <div className='date flex  my-5 mr-8  w-full justify-evenly text-3xl cursor-pointer'>
                            <div className='w-16 h-16   bg-orangeDefault rounded-full flex justify-center items-center   '>
                                <p className='text-[#fff]'>23
                                </p>
                            </div>
                            <p>24</p>
                            <p>25</p>
                            <p>26</p>
                            <p>27</p>
                            <p>28</p>
                            <p>29</p>
                        </div>
                        <hr className='text-iconGrayDefault mt-10' />
                    </div>

                </div>

                <div className='2nd Section    '>
                    <div className='shadow-2xl px-4 py-0 mx-5 rounded-lg '>
                        <div className='flex w-full justify-between items-center gap-2'>
                            <p className='text-2xl font-semibold '>Deilvery of primary obesity management results</p>
                            <span className='text-2xl text-iconGrayDefault font-semibold my-5' >Reminder</span>
                        </div>
                        <span className='text-lg text-iconGrayDefault font-semibold '>Due date: <span className='text-tableGray'> December 23, 2022</span></span>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-start items-center gap-4 my-8'>
                                <img src='https://images.unsplash.com/photo-1671385233154-e1ea05f6b548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' className='w-10  h-10 rounded-full' />
                                <span className='text-tableGray text-xl font-semibold '>George Fields</span>
                            </div>
                            <button className='bg-greenDefault 
                             px-10   h-10
                          rounded-lg'>Complete</button>
                        </div>
                    </div>

                    <div className='shadow-2xl px-4 py-[2px] mx-5 my-0 rounded-lg  '>
                        <div className='flex w-full justify-between items-center'>
                            <p className='text-2xl font-semibold my-5'>Send homework to do at home</p>
                            <span className='text-2xl text-iconGrayDefault font-semibold'>call</span>
                        </div>
                        <span className='text-lg text-iconGrayDefault font-semibold '>Due date :<span className='text-tableGray'> December 23, 2018</span></span>
                        <div className='flex justify-between my-10'>
                            <div className='flex justify-start items-center gap-4'>
                                <img src='https://images.unsplash.com/photo-1671041014656-1c9cbd170653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' alt='Img' className='w-10  h-10 rounded-full' />
                                <span className='text-tableGray text-xl font-semibold '>Rebecca Moore</span>
                            </div>
                            <div className='flex justify-start items-center gap-2 cursor-pointer'>
                                <BiCircle className='w-7 h-7 text-orangeDefault ' />
                                <BiCircle className='w-7 h-7 text-greenDefault ' />
                                <MdModeEdit className='w-7 h-7 text-iconGrayDefault  hover:text-blueDefault' />
                                <FaTrash className='w-7 h-7 text-iconGrayDefault hover:text-red' />
                                <button className='bg-blueDefault  px-14  h-10
                         rounded-lg'>Ended</button>
                            </div>
                        </div>
                    </div>

                    <div className='shadow-2xl p-2 mx-5 my-0 rounded-lg  '>
                        <div className='flex w-full justify-between items-center'>
                            <p className='text-2xl font-semibold my-5'>Office meet-up</p>
                            <span className='text-2xl text-iconGrayDefault font-semibold'>Event</span>
                        </div>
                        <span className='text-lg text-iconGrayDefault font-semibold my-10'>Due date: <span className='text-tableGray'>December 23, 2018</span> </span>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-start items-center gap-4 my-10'>
                                <img src='https://images.unsplash.com/photo-1671040570322-4fd572741609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='w-10  h-10 rounded-full' />
                                <span className='text-tableGray text-xl font-semibold'>Lindsey Stroud</span>
                            </div>
                            <button className='bg-greenDefault px-10 h-10
                                    rounded-lg'>Complete</button>
                        </div>
                    </div>

                    <div className=' flex  mt-5 justify-center items-center text-3xl  text-orangeDefault'>
                        <span>Show more</span>
                    </div>
                </div>

            </div>


            <div className='  w-full' >

                <MyCharts />

                <PieChart />


            </div >
        </div >
    )
}
