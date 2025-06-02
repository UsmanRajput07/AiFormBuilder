import AppSidebar from "@/_components/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";

export default function page() {
  return (
      <SidebarProvider >
        <AppSidebar />
        <SidebarInset>
          <main className="px-6">
            <SidebarTrigger className="-ml-1" />
          </main>
        </SidebarInset>
      </SidebarProvider>
  );
}
