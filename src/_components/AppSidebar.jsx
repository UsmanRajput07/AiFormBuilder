
import { Home, BookOpen, NotebookPen } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";
import CreateForm from "./CreateForm";
// import { useState } from "react";
// import { AiChatSession } from "@/config/AiModal";

// import UserProfile from "../components/UserProfile"
// import { Link } from "react-router"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashBoard",
    icon: Home,
  },
  {
    title: "Books",
    url: "/dashBoard/books",
    icon: BookOpen,
  },
  {
    title: "CreateBook",
    url: "/dashBoard/createBook",
    icon: NotebookPen,
  },
];


export default function AppSidebar() {
  // const [inputs, setInputs] = useState("");
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
              <CreateForm/>
      </SidebarFooter>
    </Sidebar>
  );
}
