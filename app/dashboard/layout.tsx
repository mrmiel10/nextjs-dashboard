import { Toaster as Sonner } from "sonner";
import { CircleX } from "lucide-react";
import { CircleCheckIcon } from "lucide-react";
import SideNav from '@/app/ui/dashboard/sidenav';
export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
       
        </div>
        <Sonner
        // visibleToasts={1}
          closeButton
          richColors
          icons={{
            error: <CircleX className="size-5" />,
            success: <CircleCheckIcon className="size-5" />,
          }}
        />
    </div>
  )
}