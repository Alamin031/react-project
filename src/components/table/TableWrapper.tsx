/* eslint-disable react/require-default-props */
import React, { CSSProperties } from 'react';

interface IProps {
  children: React.ReactNode;
  style?: CSSProperties;
}

export default function TableWrapper({ children, style }: IProps) {
  return (
    <div className="mx-auto my-2 overflow-x-auto max-w-full rounded-lg border border-gray-500 fill-gray-400 text-sm md:w-full lg:w-full sm:w-auto" style={style}>
      <div className="table-container" style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}>
        {children}
      </div>
    </div>
  );
}
