import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { H1, Text } from '@/components/Typography';
import InputArea from '@/components/form/InputArea';
import { Button } from '@/components/buttons';
import TextButton from '@/components/buttons/TextButton';

import { useRouter } from 'next/router';
import MenuButton from '@/components/buttons/MenuButton';
import { Go } from '@/icons';

function ForgotPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit = () => {};
  return (
    <div className=" relative flex h-screen w-screen">
      <div className="mx-auto flex h-full items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex w-full flex-col gap-10 md:w-[450px] lg:w-[550px]"
        >
          <div>
            <MenuButton
              onClick={() => {
                router.back();
              }}
            >
              <Go className="fill-indigo-500 rotate-180" />
              Back
            </MenuButton>
          </div>
          <div>
            <H1>Forgot your password?</H1>
            <Text>
              Please enter the email address associated with your account, and
              we&apos;ll email you a link to reset your password.
            </Text>
          </div>
          <div className=" flex flex-col gap-3">
            <InputArea
              label="Email Address"
              name="email"
              register={register}
              error={errors.email as { message: string } | undefined}
              type="email"
              placeholder="Enter your email"
            />

            <Button className="mt-3" type="submit">
              Reset Password
            </Button>
          </div>
          <TextButton
            onClick={() => {
              router.back();
            }}
          >
            Back to login?
          </TextButton>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
