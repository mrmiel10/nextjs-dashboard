import React from "react";
import clsx from "clsx";
const FormMessage = ({ id, error }: { id: string; error?: string[] }) => {
  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {error &&
        error.map((err: string) => (
          <p className={clsx(
          " text-sm text-red-500",
          id === "status-error" ? 'mt-0' : 'mt-2', )} 
          key={err}>
            {err}
          </p>
        ))}
    </div>
  );
};

export default FormMessage;
