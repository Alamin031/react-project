import React, { ChangeEventHandler, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  type: 'text' | 'number' | 'email' | 'password';
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  error: boolean;
  name: string;
}

function InputBox({ type, placeholder, onChange, label, error, name }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-white" htmlFor={name}>
        {label}
      </label>
      <div className="flex flex-col  rounded-md">
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          id={name}
          name={name}
          className={`h-10 appearance-none rounded-lg border bg-gray-650 py-2 text-sm leading-tight shadow ${
            error ? 'border-red-500' : 'border-gray-700'
          } focus:shadow-outline bg-gray-900 leading-tight text-white focus:border-blue-500 focus:outline-none`}
        />
      </div>
      {error && <p className="text-red-500">Error message</p>}
    </div>
  );
}

export default InputBox;
