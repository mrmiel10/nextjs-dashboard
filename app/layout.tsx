import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Toaster as Sonner } from "sonner";
import { CircleX } from "lucide-react";
import { CircleCheckIcon } from 'lucide-react';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>
        <main>   {children}</main>
        <Sonner
    
    closeButton
richColors

icons={{
  error: <CircleX className="size-5" />,
  success: <CircleCheckIcon className="size-5" />,
}}

/>
        </body>
    
    </html>
  );
}
