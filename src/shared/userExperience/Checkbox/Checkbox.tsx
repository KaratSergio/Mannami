import { forwardRef } from 'react';

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, checked, onChange, ...props }, ref) => (
  <label>
    <input type="checkbox" ref={ref} checked={checked} onChange={onChange} {...props} />
    {label}
  </label>
));

Checkbox.displayName = 'Checkbox';

export default Checkbox;
