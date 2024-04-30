import { languages } from "@/app/profile/page";
import * as z from "zod";

export const userSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  fullname: z.string().min(2, "Fullname min 2 character"),
  username: z
    .string()
    .min(3, "Username min 3 character")
    .max(100, "Username max 10 character"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});
export const userSigninSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});
export const profileSchema = z.object({
  fullname: z.string().min(2, "Fullname must be at least 2 characters long"),
  message: z.string().min(2, "Message must be at least 2 characters long"),
  language: z.string().refine((value) => languages.includes(value), {
    message: "Invalid language selection",
  }),
  dateFormate: z.string().refine((value) => languages.includes(value), {
    message: "Invalid dateFormate selection",
  }),
  timeFormate: z.string().refine((value) => languages.includes(value), {
    message: "Invalid timeFormate selection",
  }),
  country: z.string().refine((value) => languages.includes(value), {
    message: "Invalid country selection",
  }),
  timeZone: z.string().refine((value) => languages.includes(value), {
    message: "Invalid timeZone selection",
  }),
});
