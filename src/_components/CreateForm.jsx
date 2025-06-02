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
import { main } from "@/config/AiModal";
// import { Textarea } from "@/components/ui/textarea";
// import { AiChatSession } from "@/config/AiModal";
const prompt = ` on the basis of description please give a form in json formate with the form title, form subheading , form filed , form name , placeholder , and form label in json formate`;

export default function CreateForm() {
  const [inputs, SetInputs] = useState("");

  const onCreateForm = async () => {
    // const response = await AiChatSession.sendMessage(
    //   `description: ${inputs} ${prompt}`
    // );
    const response = await main(inputs);
    console.log(response);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+ Create form</Button>
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
            <Button onClick={onCreateForm} className={"mt-4"}>
              Submit
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
