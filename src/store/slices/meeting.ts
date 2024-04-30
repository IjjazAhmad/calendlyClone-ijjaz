import { URL } from "@/constants/siteUrl";
import { SetAvailabilityProps, SetMeetingProps } from "@/constants/types/allTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export const setMeetingFun = createAsyncThunk(
  "meeting/create",
  async ({schedulerEmail,schedulerName,description,selectedTime,selectedDate,fullname,id}: SetMeetingProps) => {
    try {
      const response = await axios.post(`${URL}/api/meeting`, {
        schedulerEmail,
        schedulerName,
        description,
        selectedTime,
        selectedDate,
        hostName:fullname,
        userId: id,
      });
      toast.success(`${response.data.message}`);
      return response.data; 
    } catch (error: AxiosError | any) {
      toast.error(`${error.message}`);
      throw error; 
    }
  }
);

const initialState = {
  
};

const meeting = createSlice({
  name: "meeting",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setMeetingFun.pending, (state, action) => {
      
    });
    builder.addCase(setMeetingFun.fulfilled, (state, action) => {
      
    });
    builder.addCase(setMeetingFun.rejected, (state, action) => {
    });
  },
});

export default meeting.reducer;
