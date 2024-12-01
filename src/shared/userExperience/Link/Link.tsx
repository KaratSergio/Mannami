import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  to: string;
  className?: string;
}

const Link = ({ children, to, className = '', ...rest }: LinkProps) => {
  return (
    <RouterLink to={to} className={`text-indigo-600 hover:text-indigo-700 font-semibold ${className}`} {...rest}>
      {children}
    </RouterLink>
  );
};

export default Link;
