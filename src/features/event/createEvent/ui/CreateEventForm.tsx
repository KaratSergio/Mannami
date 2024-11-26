import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CheckboxGroup from './CheckboxGroup';
import { EventFormData } from '../model/types';
import { eventValidationSchema } from '../lib/validateEvent';
import DatePickerInput from '@shared/userExperience/DatePickerInput/DatePickerInput';
import Input from '@shared/formControls/Input';

const CreateEventForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormData>({
    resolver: yupResolver<EventFormData>(eventValidationSchema),
    defaultValues: {
      eventDate: null,
      location: '',
      maxParticipants: 0,
      audience: {
        adults: false,
        men: false,
        women: false,
      },
    },
  });

  const onSubmit = (data: EventFormData) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Event Date:</label>
        <Controller
          name="eventDate"
          control={control}
          render={({ field }) => (
            <DatePickerInput
              value={field.value}
              onChange={(date: Date | null) => field.onChange(date)}
              error={errors.eventDate?.message}
            />
          )}
        />
      </div>

      <div>
        <label>Event Location:</label>
        <Controller
          name="location"
          control={control}
          render={({ field }) => <Input {...field} error={errors.location?.message} placeholder="Enter location" />}
        />
      </div>

      <div>
        <label>Maximum Number of Participants:</label>
        <Controller
          name="maxParticipants"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              error={errors.maxParticipants?.message}
              placeholder="Enter max participants"
            />
          )}
        />
      </div>

      <CheckboxGroup control={control} errors={errors} />

      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEventForm;
