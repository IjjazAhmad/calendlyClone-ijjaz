import prisma from "@/config/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {schedulerEmail,schedulerName,description,selectedTime,selectedDate,hostName,userId} =body
    console.log("🚀 ~ POST ~ id:", userId)
    const meeting = await prisma.meeting.create({
      data: {
        schedulerEmail:schedulerEmail ,
        schedulerName:schedulerName ,
        description:description ,
        selectedTime:selectedTime ,
        selectedDate:selectedDate ,
        hostName:hostName,
        userId: userId,
      },
    });
    return NextResponse.json(
      { message: "Scheduled availability successfuly", date: meeting },
      { status: 201 }
    );
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
  }
}
export async function GET(req: Request) {
  try {
    const meeting = await prisma.meeting.findMany();
    return NextResponse.json(
      { message: "Scheduled availability successfuly", date: meeting },
      { status: 201 }
    );
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return NextResponse.json(
      { message: error },
      { status: 500 }
    );
  }
}
