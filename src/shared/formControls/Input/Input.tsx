import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, ...props }, ref) => {
  return (
    <div className={className}>
      <input {...props} ref={ref} />
      {error && <p className="text-red-800">{error}</p>}
    </div>
  );
});

export default Input;
