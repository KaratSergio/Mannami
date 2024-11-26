import { InputHTMLAttributes, forwardRef, useState } from 'react';
import Button from '../Button';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  withPasswordToggled?: boolean;
  autocomplete?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, withPasswordToggled, type = 'text', autocomplete, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
      <div className={className}>
        <input
          {...props}
          ref={ref}
          type={withPasswordToggled ? (showPassword ? 'text' : 'password') : type}
          autoComplete={autocomplete}
          className={`form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50${className}`}
        />
        {error && <p className="text-red-800">{error}</p>}
        {withPasswordToggled && (
          <Button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? 'hide' : 'show'}
          </Button>
        )}
      </div>
    );
  }
);

export default Input;
