import React, { PropsWithChildren } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { Input } from '@material-tailwind/react';


interface Props extends PropsWithChildren {
  label: string;
  name: keyof FieldValues;
  register: UseFormRegister<FieldValues>;
  error?:
    | {
        message: string;
      }
    | undefined;
  type?: 'text' | 'number' | 'email' | 'password' | 'checkbox'; // Specify the type options
  placeholder?: string;
  required?: boolean;
  
}

function InputArea({
  label,
  name,
  register,
  error,
  type,
  placeholder,
  required,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-500" htmlFor={name.toString()}>
        {label}
      </label>
      <div className="flex flex-col  rounded-md">
        <Input
          crossOrigin={undefined} type={type}
          placeholder={placeholder || label}
          id={name.toString()}
          {...register(name, {
            required: required ? `${label} is required!` : false,
          })}
          className={`w-full appearance-none rounded-lg border bg-gray-100 px-3 py-4 text-sm leading-tight ${error ? 'border-red-500' : 'border-gray-300'}  leading-tight focus:border-gray-400 focus:outline-none`}        />
      </div>
      {error && <p className="text-sm text-red-500 ">{error.message}</p>}
    </div>
  );
}

InputArea.defaultProps = {
  type: 'text',
  placeholder: '',
  required: true,
  error: undefined,
};

export default InputArea;
