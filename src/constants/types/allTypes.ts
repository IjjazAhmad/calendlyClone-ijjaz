export type userType = {
  id: String;
  username: String;
  password: String;
};
export type singnInUser = {
  email: String;
  password: String;
};
export type singnupUser ={
  email: string;
  fullname: string;
  username: string;
  password: string;
}

export type SetAvailabilityProps={
  startHour: number;
  endHour: number;
  days: string[];
  id:string | undefined
}
export type SetMeetingProps={
    schedulerEmail:string,
    schedulerName: string ,
    description: string ,
    selectedTime: string | null ,
    selectedDate: string | null ,
    fullname: string | null ,
    id: string | null ,
}
export type userData={
  id: String;
  email: string;
  fullname: string;
  username: string;
}

export type meeting={
  id: String;
  schedulerEmail: string;
  schedulerName: string;
  description: string;
  selectedTime: string | null;
  selectedDate: string | null;
  hostName: string | null;
  userId: string | null;
  createdAt: Date;
  updatedAt: Date;
}
export type availability={
  id: String;
  startHour: number;
  endHour: number;
  days: string[];
  userId: string;

}
export type userState={
  user: userData,
  meeting: meeting[],
  availability: availability,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
}