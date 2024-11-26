import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CheckboxGroup from './CheckboxGroup';
import { EventFormData } from '../model/types';
import { eventValidationSchema } from '../lib/validateEvent';
import DatePickerInput from '@shared/userExperience/DatePickerInput/DatePickerInput';

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
        <label>Event Date and Time:</label>
        <Controller
          name="eventDate"
          control={control}
          render={({ field }) => (
            <DatePickerInput value={field.value} onChange={(date: Date | null) => field.onChange(date)} />
          )}
        />
        {errors.eventDate && <span>{errors.eventDate.message}</span>}
      </div>

      <div>
        <label>Event Location:</label>
        <Controller name="location" control={control} render={({ field }) => <input {...field} />} />
        {errors.location && <span>{errors.location.message}</span>}
      </div>

      <div>
        <label>Maximum Number of Participants:</label>
        <Controller
          name="maxParticipants"
          control={control}
          render={({ field }) => <input type="number" {...field} />}
        />
        {errors.maxParticipants && <span>{errors.maxParticipants.message}</span>}
      </div>

      <CheckboxGroup control={control} errors={errors} />

      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEventForm;
