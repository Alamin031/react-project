import React from 'react';

interface IProps {
  legends: {
    title: string;
    color: string;
  }[];
}

function CustomerChart({ legends }: IProps) {
  return (
    <div className="mt-4 flex justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
      {legends.map((legend) => (
        <div className="flex items-center" key={legend.title}>
          <span
            className={`mr-1 inline-block h-3 w-3 ${legend.color} rounded-full`}
          />
          <span>{legend.title}</span>
        </div>
      ))}
    </div>
  );
}

export default CustomerChart;
