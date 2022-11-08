import { ButtonHTMLAttributes, ReactNode } from "react";
import { SpanButton, StyledButton, StyledIcon } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: string;
  qtItems?: string;
}

export function Button({ children, qtItems, icon, ...props }: ButtonProps) {
  return (
    <>
      <StyledButton {...props}>
       
          {icon && <StyledIcon src={icon} />}
          {qtItems && <SpanButton>{ qtItems }</SpanButton>}
          {children}
        
      </StyledButton>
    </>
  );
}
