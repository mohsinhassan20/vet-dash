import React from 'react'
import user from "../../constants/constants"
import UserDetails from '../reusableComponents/UserDetails';
import { useLocation } from 'react-router-dom';
export default function UserListing() {
    const location = useLocation()

    const { userInfo } = user
    return (
        <div className=' shadow-2xl   rounded-lg  my-10 mx-2   w-[35%] h-auto  ' >
            {
                userInfo?.map((item) => <UserDetails name={item?.name} date={item?.date} image={item?.image} message={item?.message} border={item?.border} count={item?.count} icon={item?.icon} />)
            }
        </div >
    )
}





{/* <div className={`${border ? "border-orangeDefault border-r-4" : null}`} >
    <div className='p-5'>
        <div className='flex'>
            <div className='flex w-full gap-2  justify-start items-center '>
                <img src='https://media.istockphoto.com/id/1313901506/photo/cropped-shot-of-an-african-american-young-woman-using-smart-phone-at-home-smiling-african.jpg?b=1&s=170667a&w=0&k=20&c=o4JgDgYcp149zYj4gRVU0kQl8aOqYipIBXB3pY7F9DE=' className='w-10 h-10 rounded-full' />
                <span className='text-orangeDefault text-2xl whitespace-nowrap font-normal'>Lindsey Stroud </span>
            </div>
            <div className='whitespace-nowrap text-iconGrayDefault text-lg'>30 Dec, 2018, 12:34
            </div>


        </div>
        <div className='flex '>
            <span className='whitespace-nowrap text-iconGrayDefault flex text-xl mt-5  gap-14 '>

                <span className='ml-12'>your Idea for this application is nice.
                </span>

                <div>
                    {!count &&
                        <span className='bg-orangeDefault flex justify-center items-center w-8 h-8 rounded-lg' >
                            <span className='text-[#fff]'>
                                1
                            </span>
                        </span>
                    }
                </div>
            </span>
        </div>
    </div>

    <hr className='text-iconGrayDefault w-full ' />

</div> */}