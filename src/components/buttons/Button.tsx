import React, { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
// import { Button } from '@material-tailwind/react';

interface Props extends PropsWithChildren {
  type?: 'button' | 'submit' | 'reset';
  icons?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

function Button({ type, children, className, icons, onClick, disabled }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-3 py-3 text-lg text-white duration-100 hover:bg-indigo-600 active:scale-[.98] ${className}`}
    >
      {children} {icons}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  icons: undefined,
  onClick: undefined,
  className: '',
  disabled: false,
};

export default Button;
