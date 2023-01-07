import React, { PureComponent } from 'react';
import { MdArrowDropDown } from "react-icons/md"
import { BiCircle } from "react-icons/bi"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
} from 'recharts';

import data from "../../constants/constants"
export default class Example extends PureComponent {

    render() {
        return (
            <div className='w-full  '>
                <div className='flex justify-between items-center gap-2     ml-8  '>
                    <div>
                        <span className='text-3xl font-bold '>
                            Revenue
                        </span>

                    </div>
                    <span className='flex  gap-5 justify-start items-center'>
                        <span className='text-iconGrayDefault text-2xl'>show :</span>
                        <span className='flex justify-start items-center text-2xl text-orangeDefault'>
                            This week<MdArrowDropDown className='text-iconGrayDefault w-10 h-10' />
                        </span>
                    </span>

                </div>

                <hr className='text-iconGrayDefault mt-[24px] w-[94%] ml-10     ' />

                <div className=' mt-2 flex ml-14  gap-5'>  <BiCircle className='w-7 h-7  text-orangeDefault ' /> <span className='text-2xl '>Today</span></div>

                <div >
                    <ResponsiveContainer width="100%" height={350} >
                        <AreaChart
                            width={50}
                            height={10}
                            data={data?.revenueDetails}
                            syncId="anyId"
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="2 2" />
                            <XAxis dataKey="name" />
                            <YAxis dataKey="uv" />
                            <Tooltip />
                            <Area type="monotone" dataKey="pv" stroke="#FBB161" fill="#EAD8DD" />
                        </AreaChart>
                    </ResponsiveContainer>

                </div>
            </div>
        );
    }
}
