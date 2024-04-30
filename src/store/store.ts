import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import availability from "./slices/availability";
import meeting from "./slices/meeting";
import user from "./slices/user";

const store = configureStore({
  reducer: {
    auth:auth,
    user: user,
    availability:availability,
    meeting: meeting,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

