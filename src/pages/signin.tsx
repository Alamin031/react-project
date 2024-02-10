import Link from 'next/link';
import React from 'react';
import { SInputBox } from '@/components/input';
import { ChatbotLogo } from '@/logos';
import { SubmitButton } from '@/components/buttons';
import useCustomHook from '@/hooks/useCustomHook';

function SignIn() {
  const { handleSubmit, register, errors, onsubmit } = useCustomHook();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-gray-900 px-6 py-12">
      <form
        className="mx-auto w-full max-w-md"
        onSubmit={handleSubmit(onsubmit)}
      >
        <div className="flex flex-col gap-3 self-stretch">
          <div className="flex items-center justify-center gap-2">
            <ChatbotLogo className="mx-auto h-10 w-auto" />
          </div>
          <h2 className="justify-center py-8 text-center text-2xl font-semibold text-white">
            Sign up with your details
          </h2>

          <div className="flex flex-col gap-3">
            <SInputBox
              type="email"
              label="Email Address"
              name="email"
              register={register}
              error={errors.email as { message: string } | undefined}
            />

            <SInputBox
              label="First Name"
              name="firstName"
              register={register}
              error={errors.firstName as { message: string } | undefined}
            />

            <SInputBox
              label="Last Name"
              name="lastName"
              register={register}
              error={errors.lastName as { message: string } | undefined}
            />

            <SubmitButton type="submit" onClick={() => {}} icons={undefined}>
              Next
            </SubmitButton>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Already a user?{' '}
            <Link href="/login" className="text-blue-500 underline">
              Sign in here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
