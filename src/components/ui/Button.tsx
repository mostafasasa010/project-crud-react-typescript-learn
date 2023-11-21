import { ReactNode, ButtonHTMLAttributes } from "react";
import { TWidthBtn } from "../../types";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classBtn?: string;
  width?: TWidthBtn;
}

const Button = ({ children, classBtn, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      className={`p-2 w-full text-white rounded-md ${classBtn} ${width}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
