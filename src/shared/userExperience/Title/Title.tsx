import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Title = ({ children, level = 1, className = '' }: Props) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyles: Record<number, string> = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-bold',
    3: 'text-2xl font-semibold',
    4: 'text-xl font-medium',
    5: 'text-lg font-medium',
    6: 'text-base font-normal',
  };

  const computedClassName = `${baseStyles[level]} ${className}`;

  return <Tag className={computedClassName}>{children}</Tag>;
};

export default Title;
