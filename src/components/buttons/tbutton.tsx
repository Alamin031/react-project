/* eslint-disable no-unused-vars */
import React, { MouseEventHandler, PropsWithChildren, ReactNode } from 'react';
import { Button } from '@material-tailwind/react';

interface Props extends PropsWithChildren {
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'undefined'
    | 'gradient';
  type?: 'button' | 'submit' | 'reset';
  icons?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  color?:
  | "white"
  | "blue-gray"
  | "gray"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";}

function TButton({
  type,
  children,
  className,
  disabled,
  icons,
  variant,
  ...rest
}: Props) {
  return (
    <Button
      type={type}
      disabled={disabled}
      className="  duration-100 mx-auto w-full hover:bg-indigo-600 active:scale-[.98] sm:items-center sm:justify-center sm:w-full md:w-full lg:w-full "
      variant="filled"
      {...rest}
    >
      {children} {icons}
    </Button>
  );
}

TButton.defaultProps = {
  variant: 'primary',
  type: 'button',
  icons: undefined,
  onClick: undefined,
  disabled: false,
  className: '',
  color: 'undefined',
};

export default TButton;
