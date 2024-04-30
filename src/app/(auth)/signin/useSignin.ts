"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSigninSchema } from "@/constants/ValidationSchema/FormSchema";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signinFun } from "@/store/slices/auth";
import { singnInUser } from "@/constants/types/allTypes";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export const useSignin = () => {
  const [loading, setisLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<singnInUser>({
    resolver: zodResolver(userSigninSchema),
  });

  const onSubmit = async (value: singnInUser) => {
    try {
      setisLoading(true);
      await dispatch(signinFun(value) as any)
       setisLoading(false);
       router.push("/");
    } catch (error) {
      toast.error("error")
    }
  };

  return {
    loading,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
