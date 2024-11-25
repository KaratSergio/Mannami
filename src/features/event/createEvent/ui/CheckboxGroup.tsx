import Checkbox from '@shared/userExperience/Checkbox/Checkbox';
import { Controller } from 'react-hook-form';

interface CheckboxGroupProps {
  control: any;
  errors: any;
}

const CheckboxGroup = ({ control, errors }: CheckboxGroupProps) => (
  <div>
    <div>
      <Controller
        name="audience.adults"
        control={control}
        render={({ field }) => <Checkbox label="Adults Only" {...field} />}
      />
      {errors?.audience?.adults && <span>{errors.audience.adults.message}</span>}
    </div>
    <div>
      <Controller
        name="audience.men"
        control={control}
        render={({ field }) => <Checkbox label="Men Only" {...field} />}
      />
    </div>
    <div>
      <Controller
        name="audience.women"
        control={control}
        render={({ field }) => <Checkbox label="Women Only" {...field} />}
      />
    </div>
  </div>
);

export default CheckboxGroup;
