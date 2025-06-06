"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import {generateForm} from "@/Configs/AiModal"
import db from "@/Configs/Db/NeonConnection";
import { forms } from "@/Configs/Db/Schema/FormSchema";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
// import { AiChatSession } from "@/config/AiModal";
const prompt = ` on the basis of description please give a form in json formate with the form title, form subheading , form filed , form name , placeholder , and form label in json formate`;

export default function CreateForm() {
  const router = useRouter();
  const [inputs, SetInputs] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const {user} = useUser();

  const onCreateForm = async () => {
    setLoading(true);
    // const response = await AiChatSession.sendMessage(
    //   `description: ${inputs} ${prompt}`
    // );
    const response = await generateForm(inputs);
    if(response?.candidates[0]?.finishReason ==="STOP"){
      setLoading(false);
      const formId = await db.insert(forms).values({Form:response?.candidates[0]?.content?.parts[0]?.text, createdBy: user.primaryEmailAddress?.emailAddress, updatedAt: new Date()}).returning({id:forms.id});
      // setContent((response?.candidates[0]?.content?.parts[0]?.text));
      console.log(formId);
      router.push(`/dashboard/edit-form/${formId[0].id}`);
      setIsOpen(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>+ Create form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Form</DialogTitle>
          <DialogDescription className="max-w-md w-full">
            <Textarea
              //  className="w-full max-w-full resize-y"
              value={inputs}
              onChange={(e) => SetInputs(e.target.value)}
            />
            <Button
              onClick={onCreateForm}
              className={"mt-4"}
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoaderCircle className="animate-spin" />{"Submitting..."}
                </>
              ) : (
                "Create Form"
              )}
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

