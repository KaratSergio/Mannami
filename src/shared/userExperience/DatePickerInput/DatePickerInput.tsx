import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './DatePicker.module.css';

interface DatePickerInputProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  error?: string;
}

const DatePickerInput = ({ value, onChange, error }: DatePickerInputProps) => (
  <div className="relative">
    <DatePicker
      selected={value}
      onChange={onChange}
      showTimeSelect
      dateFormat="Pp"
      className={`${css.customDatePickerInput} form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-50`}
      calendarClassName={css.reactDatePicker}
    />

    {error && <p className="text-red-800 mt-1 text-sm">{error}</p>}
  </div>
);

export default DatePickerInput;
