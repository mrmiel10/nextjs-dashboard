
import PaginationTable from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { poppins } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchInvoicesPages } from "@/app/lib/data";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  console.log(currentPage);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${poppins.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>

      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <ShowTable query={query} currentPage={currentPage} />
      </Suspense>
      {/* <pagination /> */}
    </div>
  );
}
const ShowTable = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const totalPages = await fetchInvoicesPages(query);
  return (
    <>
      <Table query={query} currentPage={currentPage} />

      <div className="mt-5 flex w-full justify-center">
        <PaginationTable totalPages={totalPages} />
      </div>
    </>
  );
};
// export const  pagination = () =>{
//   return (
//   <Pagination>
//   <PaginationContent>
//     <PaginationItem>
//       <PaginationPrevious href="#" />
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationLink href="#">1</PaginationLink>
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationLink href="#" isActive>
//         2
//       </PaginationLink>
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationLink href="#">3</PaginationLink>
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationEllipsis />
//     </PaginationItem>
//     <PaginationItem>
//       <PaginationNext href="#" />
//     </PaginationItem>
//   </PaginationContent>
// </Pagination>
// )
// }
