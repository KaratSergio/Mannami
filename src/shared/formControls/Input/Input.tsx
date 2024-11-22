import { InputHTMLAttributes, forwardRef, useState } from 'react';
import Button from '../Button';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  withPasswordToggled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, withPasswordToggled, type = 'text', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
      <div className={className}>
        <input
          {...props}
          ref={ref}
          type={withPasswordToggled ? (showPassword ? 'text' : 'password') : type}
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
