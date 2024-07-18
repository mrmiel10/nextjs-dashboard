import { clsx } from "clsx";
import Link from "next/link";
import { poppins } from "../fonts";

interface typeBreadcrumb {
  label: string;
  href: string;
  active?: boolean;
}
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: typeBreadcrumb[];
}) {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList className="text-xl md:text-2xl">
        {breadcrumbs.map((breadcrumb, index) =>
          breadcrumb.active === true ? (
            <>
              <BreadcrumbItem className="text-gray-900">
                <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 ? <BreadcrumbSeparator /> : null}
            </>
          ) : (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="text-gray-500">
                  <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 ? <BreadcrumbSeparator /> : null}
            </>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>

    // <nav aria-label="Breadcrumb" className="mb-6 block">
    //   <ol className={clsx(poppins.className, 'flex text-xl md:text-2xl')}>
    //     {breadcrumbs.map((breadcrumb, index) => (
    //       <li
    //         key={breadcrumb.href}
    //         aria-current={breadcrumb.active}
    //         className={clsx(
    //           "mt-2",
    //           breadcrumb.active ? 'text-gray-900' : 'text-gray-500',
    //         )}
    //       >
    //         <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
    //         {index < breadcrumbs.length - 1 ? (
    //           <span className="mx-3 inline-block">/</span>
    //         ) : null}
    //       </li>
    //     ))}
    //   </ol>
    // </nav>
  );
}
