import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";

import AdminServices from '../pages/service/admin.service';

interface LoginFormInputs {
  username: string;
  password: string;
  rememberMe: boolean;
}

const useLoginSubmit = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async ({
    username,
    password,
  }) => {
    setLoading(true);

    try {
      const res = await AdminServices.loginAdmin({ username, password });

      if (res) {
        setLoading(false);
        router.push('/dashboard');
        // console.log("Login Success!")
        // notifySuccess("Login Success!");
        // dispatch({ type: "USER_LOGIN", payload: res });
        Cookies.set("authToken", JSON.stringify(res.data.accessToken));

        // history.replace("/");
      }
    } catch (err) {
      // notifyError(err ? err.response.data.message : err.message);
      setLoading(false);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loading,
  };
};

export default useLoginSubmit;
