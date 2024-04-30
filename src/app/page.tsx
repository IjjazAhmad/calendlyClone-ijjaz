import { Metadata } from "next";
import DefaultLayout from "@/(components)/layouts/DefaultLayout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/constants/authProvider";
import Link from "next/link";
import Table from "@/(components)/table/Table";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default async function Home() {
  const session = await getServerSession(authOptions);
  const id = session?.user.id;
  // if (!session) {
  //   redirect("/signin");
  // }

  return (
    <>
      <DefaultLayout>
        <h1 className="font-bold text-[25px]">Home</h1>
        <Table name={"Add Event"} path={`schedulemeeting/${id}`} />
      </DefaultLayout>
    </>
  );
}
