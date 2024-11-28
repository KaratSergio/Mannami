import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface PropsLink {
  children: ReactNode;
  path: string;
  styles?: string;
}

const Link = ({ children, path, styles = '' }: PropsLink) => {
  return (
    <RouterLink to={path} className={`text-indigo-600 hover:text-indigo-700 font-semibold ${styles}`}>
      {children}
    </RouterLink>
  );
};

export default Link;
