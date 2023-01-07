import React from "react";
import memeberDetails from "../../constants/constants"
import Members from './../members/Members';
import { MdArrowDropDown } from "react-icons/md"
import { AiOutlineCheckSquare } from 'react-icons/ai';
const Table = () => {
    const { data } = memeberDetails;

    const [checked, setChecked] = React.useState(false);





    return (
        <div className="   px-4 sm:px-6 lg:px-8b   
         w-full max-h-screen  ">
            <div className="sm:flex sm:items-center ">
                <div className=" flex my-[2.5%] w-full justify-between items-center mx-12">
                    <span className='flex  gap-5 justify-start items-center'>
                        <span className='text-iconGrayDefault text-2xl'>Company :</span>
                        <span className='flex justify-start items-center text-2xl text-orangeDefault'>
                            All <MdArrowDropDown className='text-iconGrayDefault w-10 h-10' />
                        </span>
                    </span>
                    <button className="justify-center items-center bg-orangeDefault p-3 rounded text-[#fff] font-medium" >
                        Add Members
                    </button>

                </div>
            </div>



            <div className="inline-block min-w-full  align-middle md:px-6 lg:px-8 pb-24">
                <div className=" shadow-2xl ring-1 ring-black ring-opacity-5 md:rounded-lg ">
                    <table className="min-w-full       divide-y divide-gray-300 ">
                        <thead className="">
                            <tr className="text-grayDefault">
                                <th scope="col" className="flex gap-2 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                    <span className="ml-24 text-iconGrayDefault text-xl"> Name</span>

                                </th>
                                <th scope="col" className="  px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <span className="flex gap-2 text-iconGrayDefault text-xl">
                                        Phone Number

                                    </span>
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <span className="flex gap-2 text-iconGrayDefault text-xl ">
                                        Dog's Name

                                    </span>
                                </th>
                                <th scope="col" className="px-3  text-left text-sm font-semibold text-gray-900">
                                    <span className="flex gap-2 text-iconGrayDefault text-xl">
                                        Age

                                    </span>
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <span className="flex gap-2 text-iconGrayDefault text-xl  ">
                                        Weight (kg)
                                    </span>
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <span className="flex gap-2 text-iconGrayDefault text-xl">
                                        Status
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-iconGrayDefault">
                            {data.map((person, index) => (
                                <tr className="text-grayDefault" key={index}>

                                    <td className="whitespace-nowrap py-1 pl-4 pr-3 text-sm sm:pl-6">
                                        <div className="flex items-center">
                                            <input type="checkbox" defaultChecked={checked}
                                                onChange={() => setChecked(!checked)}
                                                className="w-5 h-5  m-5 ml-0  text-blueDefault  accent-orangeDefault   "

                                            />
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="font-medium text-tableBlackDefault text-xl">{person.userName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div className="text-tableGray font-medium text-lg">{person.phoneNumber}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <span className="inline-flex rounded-full   font-semibold leading-5 text-tableGray text-lg">{person.name}</span>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-tableGray font-medium text-lg">{person.age}</td>

                                    <td className="relative whitespace-nowrap py-4  text-center      font-medium  text-tableGray text-lg  ">
                                        {person.weight}
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4    font-medium sm:pr-6 text-tableGray text-lg">
                                        {person.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </div >
    );
};

export default Table;
