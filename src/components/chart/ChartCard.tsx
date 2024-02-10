import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Caption, H6, Text } from '../Typography';

interface IProps {
  children: React.ReactNode;
  title: string;
}

function Chart({ children, title }: IProps) {
  return (
    <div className="shadow-xs mt-10 flex min-w-0 flex-col gap-5 rounded-lg bg-white  p-5 shadow-md">
      <div className="-mt-12 rounded-xl bg-white  p-5 shadow-lg  shadow-gray-500/40">
        {children}
      </div>
      <div>
        <H6>{title} </H6>
        <Text>Last Campaign Performance</Text>
      </div>
      <div className="h-[1px] rounded-full bg-gray-200" />
      <div className="flex items-center gap-1 text-gray-600">
        <AiOutlineClockCircle /> <Caption> campaign sent 2 days ago</Caption>
      </div>
    </div>
  );
}

export default Chart;
