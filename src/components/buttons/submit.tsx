import React, { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';

interface Props extends PropsWithChildren {
  icons: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit' | 'reset' ; 
}

export default function SubmitButton({ children, icons, type, onClick }: Props) {
  return (
    <button
    type={type}
    onClick={onClick}
      className="w-full mt-4 rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
      {children} {icons}
    </button>
  );
}
