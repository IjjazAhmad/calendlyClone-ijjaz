"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/constants/ValidationSchema/FormSchema";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { singnupUser } from "@/constants/types/allTypes";
import { useDispatch } from "react-redux";
import { signupFun } from "@/store/slices/auth";
export const useSignupForm = () => {
  const [loading, setisLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<singnupUser>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (value: singnupUser) => {
    try {
      setisLoading(true);
      await dispatch(signupFun(value) as any);
      reset();
      setisLoading(false);
      router.push("/signin");
    } catch (error: AxiosError | any) {
      console.log(error);
      toast.error(`${error?.response?.data.message}`);
      setisLoading(false);
    }
  };
  return {
    loading,
    errors,
    onSubmit,
    register,
    reset,
    handleSubmit,
  };
};
