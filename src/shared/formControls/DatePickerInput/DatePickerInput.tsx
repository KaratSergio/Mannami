import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import { Input } from '@shared/formControls';

interface DatePickerInputProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  error?: string;
}

const DatePickerInput = ({ value, onChange, error }: DatePickerInputProps) => (
  <DatePicker selected={value} onChange={onChange} customInput={<Input className="w-full" error={error} />} />
);

export default DatePickerInput;
