import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CheckboxGroup from './CheckboxGroup';
import { EventFormData } from '../model/types';
import { eventValidationSchema } from '../lib/validateEvent';
import DatePickerInput from '@shared/formControls/DatePickerInput/DatePickerInput';
import { Input } from '@shared/formControls';
import { Button } from '@shared/userExperience';

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1 p-6 bg-white shadow-md rounded-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Event Date:</label>
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
        <label className="block text-sm font-medium text-gray-700">Event Location:</label>
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <Input {...field} error={errors.location?.message} placeholder="Enter location" className="w-full" />
          )}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Maximum Number of Participants:</label>
        <Controller
          name="maxParticipants"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              error={errors.maxParticipants?.message}
              placeholder="Enter max participants"
              className="w-full"
            />
          )}
        />
      </div>

      <div className="space-y-4">
        <p className="block text-sm font-medium text-gray-700">Target Audience:</p>
        <CheckboxGroup control={control} errors={errors} />
      </div>

      <Button className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition" type="submit">
        Create Event
      </Button>
    </form>
  );
};

export default CreateEventForm;
