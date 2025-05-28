"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { Fragment } from "react";

export default function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between p-4">
      <Image
        src="/logoipsum-332.svg"
        alt="Vercel Logo"
        width={100}
        height={24}
      />
      {isSignedIn ? (
        <div className="flex gap-4 items-center justify-center gap-4">
          <Button>Dashboard</Button>
          <UserButton/>
        </div>
      ) : (
        <Button>Get Started</Button>
      )}
    </div>
  );
}
