import Checkbox from '@shared/userExperience/Checkbox/Checkbox';
import { Controller } from 'react-hook-form';
import { CheckboxGroupProps } from '../model/types';

const CheckboxGroup = ({ control, errors }: CheckboxGroupProps) => (
  <div>
    <div>
      <Controller
        name="audience.adults"
        control={control}
        render={({ field }) => <Checkbox label="Adults Only" checked={field.value} onChange={field.onChange} />}
      />
      {errors?.audience?.adults && <span>{errors.audience.adults.message}</span>}
    </div>
    <div>
      <Controller
        name="audience.men"
        control={control}
        render={({ field }) => <Checkbox label="Men Only" {...field} onChange={field.onChange} />}
      />
    </div>
    <div>
      <Controller
        name="audience.women"
        control={control}
        render={({ field }) => <Checkbox label="Women Only" {...field} onChange={field.onChange} />}
      />
    </div>
  </div>
);

export default CheckboxGroup;
