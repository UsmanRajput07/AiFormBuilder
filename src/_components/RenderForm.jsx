"use client";
import db from "@/Configs/Db/NeonConnection";
import { forms } from "@/Configs/Db/Schema/FormSchema";
import { useUser } from "@clerk/nextjs";
import { eq, and } from "drizzle-orm";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import MainHeading from "./MainHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RenderForm() {
  const [formData, setFormData] = useState({});
  console.log(formData?.formFields);
  const { formId } = useParams();
  const { user } = useUser();
  const getForm = async () => {
    const response = await db.select().from(forms).where(
      eq(forms?.id, formId)
      // eq(forms?.createdBy, user?.primaryEmailAddress?.emailAddress)
    );
    setFormData(JSON.parse(response[0]?.Form));
  };
  useEffect(() => {
    getForm();
  }, []);
  return (
    <div className="p-4">
      <MainHeading data={formData?.formTitle} size={2} />
      <MainHeading data={formData?.formSubheading} size={1} />
      {formData?.formFields?.map((item, id) => {
        return (
          <div className="grid w-full max-w-full items-center gap-4 py-4" key={id}>
            <Label htmlFor={item?.formName}>{item?.formLabel}</Label>
            <Input type={item?.type} id={item?.formName} placeholder={item?.placeholder  } />
          </div>
        );
      })}
    </div>
  );
}
