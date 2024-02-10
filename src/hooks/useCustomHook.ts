import { useForm } from 'react-hook-form';

const useCustomHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
    },
  });

  const onsubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return {
    handleSubmit,
    register,
    errors,
    onsubmit,
  };
};

export default useCustomHook;
