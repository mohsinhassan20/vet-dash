import React from 'react'
import { GoPrimitiveDot } from "react-icons/go"
import { HiDotsVertical } from "react-icons/hi"
import { MdOutlineAttachFile } from "react-icons/md"
import { CiFaceSmile } from "react-icons/ci"
import { AiOutlineMinus } from "react-icons/ai"
export default function ChatScreen({ className }) {
    return (
        <div className={` w-[68%] my-10 mr-10   ${className} `}>
            <div className='   flex   justify-between items-center '>
                <div className='flex justify-start items-center gap-5'>
                    <img src='https://media.istockphoto.com/id/1352063475/photo/concentrated-young-business-woman-working-with-computer-in-the-office.jpg?b=1&s=170667a&w=0&k=20&c=6aj8QDY6rb2XC6JsDSxhK3l3uJZGi9GOHMOTuuUqiEk=' className='w-10 h-10 rounded-full' />
                    <span className='text-tableBlackDefault text-xl font-medium'>Lindsey Stroud</span>
                    <GoPrimitiveDot className='text-greenDefault' />
                </div>
                <HiDotsVertical />
            </div>
            <div className='border  relative  left-72  p-1 rounded-lg w-[70%]  border-t-0 text-lg text-grayDefault  mx-5 my-3'>
                dolor sit amet consecteturg.
            </div>

            <div className='flex justify-start items-center gap-5'>
                <img src='https://media.istockphoto.com/id/1352063475/photo/concentrated-young-business-woman-working-with-computer-in-the-office.jpg?b=1&s=170667a&w=0&k=20&c=6aj8QDY6rb2XC6JsDSxhK3l3uJZGi9GOHMOTuuUqiEk=' className='w-5 h-5 rounded-full' />
                <span className='text-tableBlackDefault text-xl font-medium '>Lindsey Stroud</span>
                <span className='text-iconGrayDefault text-sm
                '>11:12</span>
            </div>

            <div className='bg-orangeDefault text-[#fff] font-normal text-lg p-2 rounded-lg w-[70%]   mx-5 my-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie. Ligula ullamcorper malesuada proin libero nunc consequat interdum. A lacus vestibulum sed arcu non odio euismod lacinia. Aliquet eget sit amet tellus cras adipiscing enim.
            </div>
            <div className='flex justify-end  items-center gap-3  '>
                <img src='https://media.istockphoto.com/id/1352063475/photo/concentrated-young-business-woman-working-with-computer-in-the-office.jpg?b=1&s=170667a&w=0&k=20&c=6aj8QDY6rb2XC6JsDSxhK3l3uJZGi9GOHMOTuuUqiEk=' className='w-5 h-5 rounded-full' />
                <span className='text-tableBlackDefault text-xl font-medium '>You</span>
                <span className='text-iconGrayDefault text-sm mr-2
                '>11:12</span>
            </div>

            <div className='border  relative  left-72  p-2 rounded-lg w-[70%]  text-lg text-grayDefault  m-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consecteturg.
            </div>

            <div className='flex justify-start items-center gap-5'>
                <img src='https://media.istockphoto.com/id/1352063475/photo/concentrated-young-business-woman-working-with-computer-in-the-office.jpg?b=1&s=170667a&w=0&k=20&c=6aj8QDY6rb2XC6JsDSxhK3l3uJZGi9GOHMOTuuUqiEk=' className='w-5 h-5 rounded-full' />
                <span className='text-tableBlackDefault text-xl font-medium '>Lindsey Stroud</span>
                <span className='text-iconGrayDefault text-sm
                '>11:12</span>
            </div>

            <div className='bg-orangeDefault text-[#fff] font-normal text-lg p-2 rounded-lg w-[70%]   m-5'>
                Your idea for this application is nice!    </div>
            <div className='flex justify-end  items-center gap-3  '>
                <img src='https://media.istockphoto.com/id/1352063475/photo/concentrated-young-business-woman-working-with-computer-in-the-office.jpg?b=1&s=170667a&w=0&k=20&c=6aj8QDY6rb2XC6JsDSxhK3l3uJZGi9GOHMOTuuUqiEk=' className='w-5 h-5 rounded-full' />
                <span className='text-tableBlackDefault text-xl font-medium '>You</span>
                <span className='text-iconGrayDefault text-sm mr-2
                '>11:12</span>
            </div>
            <div className='border  relative  left-72  p-2 rounded-lg w-[70%]  border-t-0 text-lg text-grayDefault  m-5'>
                dolor sit amet consecteturg.
            </div>
            <div className='flex justify-start items-center gap-5'>
                <img src='https://media.istockphoto.com/id/1352063475/photo/concentrated-young-business-woman-working-with-computer-in-the-office.jpg?b=1&s=170667a&w=0&k=20&c=6aj8QDY6rb2XC6JsDSxhK3l3uJZGi9GOHMOTuuUqiEk=' className='w-5 h-5 rounded-full' />
                <span className='text-tableBlackDefault text-xl font-medium '>Lindsey Stroud</span>
                <span className='text-iconGrayDefault  italic tracking-widest text-sm my-5
                '>Typing a message...</span>
            </div>


            <hr className='text-grayDefault w-full' />
            <div className='rounded-lg  flex justify-between items-center'>

                <p className='p-4 text-grayDefault text-xl'>Type a message...</p>
                <div className='flex gap-2 mx-4'>

                    <MdOutlineAttachFile className='w-8 h-8 text-grayDefault' />
                    <CiFaceSmile className='w-8 h-8 text-grayDefault' />
                </div>
            </div>
        </div>
    )
}
