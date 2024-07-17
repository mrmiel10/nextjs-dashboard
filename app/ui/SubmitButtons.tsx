"use client";
import { Loader2 } from "lucide-react";
import React from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";
export const CreateInvoiceButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button className="min-w-32" disabled type="submit">
          <Loader2 className="size-4 text-primary animate-spin" />
          {/* Create Invoice */}
        </Button>
      ) : (
        <Button>Create invoice</Button>
      )}
    </>
  );
};
