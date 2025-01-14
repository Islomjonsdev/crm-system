import { cn } from "@/lib/utils";
import Image from "next/image";

const Button = ({
  label,
  fullWidth,
  icon,
  large,
  disabled,
  outline,
  onClick,
  type = "button",
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        "rounded-[14px] bg-[#3F8CFF] pt-[11px] pr-[23px] pb-[13px] pl-[16px] text-[#FFFFFF] font-bold text-[16px] leading-[21.82px] flex items-center", fullWidth ? "bg-[#000] text-[#fff] text-center flex items-center justify-center" : ""
      )}
    >
      {icon && <Image src={icon} alt="button icon" width={24} height={24} />}
      {label}
    </button>
  );
};

export default Button;
