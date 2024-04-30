import { URL } from "@/constants/siteUrl";
import { singnInUser, singnupUser } from "@/constants/types/allTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
export const signupFun = createAsyncThunk(
  "user/create",
  async (value: singnupUser) => {
    try {
      const response = await axios.post(`${URL}/api/user`, {
        email: value.email,
        fullname: value.fullname,
        username: value.username,
        password: value.password,
      });
      toast.success(`${response.data.message}`);
    } catch (error: AxiosError | any) {
      console.log(error);
      toast.error(`${error?.response?.data.message}`);
    }
  }
);
export const signinFun = createAsyncThunk(
  "user/login",
  async (value: singnInUser) => {
    const signinData = await signIn("credentials", {
      email: value.email,
      password: value.password,
      redirect: false,
    });
    if (signinData?.error) {
      toast.error(`${signinData.error}`);
    } else {
      toast.success("User login successfuly");
    }
  }
);
const initialState = {};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: () => {},
    logout: () => {},
  },
  extraReducers(builder) {
    builder.addCase(login, (state, action) => {});
    builder.addCase(logout, (state, action) => {});
  },
});
export const { login, logout } = auth.actions;
export default auth.reducer;
