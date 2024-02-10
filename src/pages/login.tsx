/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Typography, Checkbox } from '@material-tailwind/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import TButton from '@/components/buttons/tbutton';
import useLoginSubmit from '../hooks/useLoginSubmit';
import TextInput from '../components/input/TextInput';

function Login() {
  const { onSubmit, register, handleSubmit, errors, loading } =
    useLoginSubmit();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex  h-screen md:flex-row">
      <div className="hidden lg:block lg:w-1/2 xl:w-1/3 ">
        <img
          alt="login_cover"
          src="/login.jpg"
          className="h-full w-full  object-cover "
        />
      </div>
      <div
        className="flex w-full flex-col items-center justify-center rounded-lg bg-white p-5 shadow-md md:h-full lg:w-1/2  xl:w-2/3 "
        style={{ backgroundImage: 'url(/l.jpg)' }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full p-10  md:block md:w-full"
        >
          <div className="mb-4  w-full flex-col gap-6 md:block   md:w-full md:items-center md:justify-center lg:w-96">
            <Typography variant="h3" color="blue-gray">
              Welcome Back
            </Typography>
            <Typography color="gray" className="mt-1 font-normal ">
              Log in to your account
            </Typography>
            <div className="relative">
            <label htmlFor="username" className="text-sm text-gray-500">
                Username
              </label>
              <TextInput
                type="text"
                placeholder="Username"
                name="username"
                register={register}
                error={errors.username as { message: string } | undefined}
              />
            </div>

            <div className="relative">
            <label htmlFor="password" className="text-sm text-gray-500">
                Password
              </label>
              <TextInput
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                register={register}
                error={errors.password as { message: string } | undefined}
              />
              <div
                style={{
                  top: '50%',
                }}
                className="absolute right-4 mt-3 -translate-y-1/2  transform cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>
            <div className="flex items-center gap-10">
              <Checkbox
                id="rememberMe"
                label="Remember me"
                className="flex items-center font-normal"
                {...register('rememberMe')}
                color="indigo"
                crossOrigin="undefined"
              />
            </div>
            <div className="flex items-center justify-between">
              <TButton
                className="mx-auto  mt-4  flex md:items-center md:justify-between"
                type="submit"
                variant="gradient"
                color="green"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Login'}
              </TButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
