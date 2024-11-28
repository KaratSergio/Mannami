import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { Button } from '@shared/userExperience/Button';
import { Icon } from '@shared/icons';

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
      <div className="relative w-[100%]">
        <input
          {...props}
          ref={ref}
          type={withPasswordToggled ? (showPassword ? 'text' : 'password') : type}
          autoComplete={autocomplete}
          className={`form-input mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${className} ${
            error ? 'border-red-500' : ''
          }`}
        />

        <div className="flex items-center h-4"> {error && <p className="text-sm text-red-500 mt-1">{error}</p>}</div>

        {withPasswordToggled && (
          <Button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-[24%] right-2 flex items-center"
            aria-label="Toggle password visibility"
          >
            <Icon id={showPassword ? 'icon-eye' : 'icon-eye-off'} width="18px" height="18px" fill="#ef2447" />
          </Button>
        )}
      </div>
    );
  }
);

export default Input;
