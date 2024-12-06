import DatePicker from 'react-datepicker';
import { ru } from 'date-fns/locale';
import { getMonth, getYear } from 'date-fns';
import { Input } from '@shared/formControls';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

interface DatePickerInputProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  error?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const DatePickerInput = ({ value, onChange, error, onConfirm, onCancel }: DatePickerInputProps) => {
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      locale={ru}
      customInput={<Input className="w-full" error={error} />}
      renderCustomHeader={({ date, changeYear, decreaseMonth, increaseMonth }) => (
        <div className="flex flex-col items-center gap-[10px] mb-[24px]">
          <div className="flex justify-between items-center w-full">
            <button onClick={() => changeYear(getYear(date) - 1)}>{'<'}</button>
            <span>{getYear(date)}</span>
            <button onClick={() => changeYear(getYear(date) + 1)}>{'>'}</button>
          </div>

          <div className="flex justify-between items-center w-full">
            <button onClick={decreaseMonth}>{'<'}</button>
            <span>{months[getMonth(date)]}</span>
            <button onClick={increaseMonth}>{'>'}</button>
          </div>
        </div>
      )}
      fixedHeight
    />
  );
};

export default DatePickerInput;
