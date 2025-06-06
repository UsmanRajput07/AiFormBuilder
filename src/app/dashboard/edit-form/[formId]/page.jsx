import RenderForm from "@/_components/RenderForm";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-row gap-4 dvh-screen">
      <div className="basis-1/3 border border-gray-300 rounded-md"></div>
      <div className="border border-gray-300 rounded-md basis-2/3">
        <RenderForm />
      </div>
    </div>
  );
}
