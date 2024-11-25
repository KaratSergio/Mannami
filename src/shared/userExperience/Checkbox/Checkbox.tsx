import { forwardRef } from 'react';

interface CheckboxProps {
  label: string;
  [key: string]: any;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, ...props }, ref) => (
  <label>
    <input type="checkbox" ref={ref} {...props} />
    {label}
  </label>
));

Checkbox.displayName = 'Checkbox';

export default Checkbox;
