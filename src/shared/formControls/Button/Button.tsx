import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, type }: ButtonProps) => {
  return <button type={type}>{children}</button>;
};

export default Button;
