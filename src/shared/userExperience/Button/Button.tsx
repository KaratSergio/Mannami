import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick, ...props }: ButtonProps) => {
  return (
    <button {...props} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
