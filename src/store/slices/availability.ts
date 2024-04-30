import { URL } from "@/constants/siteUrl";
import { SetAvailabilityProps } from "@/constants/types/allTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export const setAvailabilityFun = createAsyncThunk(
  "availability/create",
  async ({ startHour, endHour, days, id }: SetAvailabilityProps) => {
    try {
      const response = await axios.post(`${URL}/api/availability`, {
        startHour: startHour,
        endHour: endHour,
        days: days,
        userId: id,
      });
      toast.success(`${response.data.message}`);
      return response.data; 
    } catch (error: AxiosError | any) {
      toast.error(`${error.response.data.message}`);
      throw error; 
    }
  }
);

const initialState = {
  
};

const availability = createSlice({
  name: "availability",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setAvailabilityFun.pending, (state, action) => {
      
    });
    builder.addCase(setAvailabilityFun.fulfilled, (state, action) => {
      
    });
    builder.addCase(setAvailabilityFun.rejected, (state, action) => {
    });
  },
});

export default availability.reducer;
