import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerInputProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const DatePickerInput = ({ value, onChange }: DatePickerInputProps) => (
  <DatePicker selected={value} onChange={onChange} showTimeSelect dateFormat="Pp" />
);

export default DatePickerInput;
