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
  <div className="relative">
    <DatePicker selected={value} onChange={onChange} customInput={<Input />} />

    {error && <p className="text-red-800 mt-1 text-sm">{error}</p>}
  </div>
);

export default DatePickerInput;
