import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, formInput, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-[100%] pt-[12px] pr-[19px] pb-[12px] pl-[54px] rounded-[14px] outline-none border relative",
          formInput ? "pt-[5px] pr-[10px] pb-[5px] pl-[10px]" : ""
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
