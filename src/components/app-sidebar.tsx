"use client";
import { Home, Info, Settings, Search, Languages } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./theme-switcher";
import { useTranslation } from "./translation-context";

// Menu items.
const nav = [
  {
    label: "Content",
    items: [
      { href: "/", text: "All Pastas", icon: Home },
      { href: "/pasta-info", text: "Pasta Info", icon: Info },
      { href: "/what-is-pasta", text: "What is pasta?", icon: Search },
    ],
  },
  {
    label: "Project",
    items: [{ href: "/project", text: "Project Info", icon: Settings }],
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { showTranslation, setShowTranslation } = useTranslation();

  return (
    <Sidebar
      side="left"
      variant="sidebar"
      collapsible="offcanvas"
      className="border-r border-border/50 bg-sidebar/95 backdrop-blur-sm dark:bg-sidebar/90"
    >
      <SidebarHeader className="font-bold text-lg px-4 py-4 border-b border-border/50 bg-sidebar/80 backdrop-blur-sm dark:bg-sidebar/70">
        Pasta Vault
      </SidebarHeader>

      <SidebarContent className="px-2 py-4 bg-transparent space-y-2">
        {nav.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
              {group.label}
            </SidebarGroupLabel>

            <SidebarMenu>
              {group.items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-accent/60 hover:text-accent-foreground border border-transparent hover:border-border/50 hover:shadow-sm dark:hover:bg-accent/40"
                    >
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{item.text}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
            Settings
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <ThemeSwitcher />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-accent/60 hover:text-accent-foreground border border-transparent hover:border-border/50 hover:shadow-sm dark:hover:bg-accent/40"
              >
                <Languages className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Translation</span>
                <div className="ml-auto flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-colors ${
                      showTranslation
                        ? "bg-primary border-primary"
                        : "bg-transparent border-muted-foreground"
                    }`}
                  >
                    {showTranslation && (
                      <div className="w-2 h-2 bg-primary-foreground rounded-full m-0.5" />
                    )}
                  </div>
                </div>
              </button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-4 py-3 text-xs text-muted-foreground border-t border-border/50 bg-sidebar/80 backdrop-blur-sm dark:bg-sidebar/70">
        <div className="flex items-center justify-between">
          © 2025 Pasta Vault
          <span className="text-gray-400 dark:text-gray-500">Beta</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
