import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { TranslationProvider } from "@/components/translation-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pasta Reader",
  description: "An immersive pasta reader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <ThemeProvider defaultTheme="system" storageKey="ui-theme">
          <TranslationProvider>
            <SidebarProvider>
              <AppSidebar />
              <main className="min-h-screen">
                <SidebarTrigger />
                {children}
              </main>
            </SidebarProvider>
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
