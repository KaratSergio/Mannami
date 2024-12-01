import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@shared/formControls';
import { Button, Title } from '@shared/userExperience';
import { RegistrationFormInputs } from '../model/types';
import { registrationSchema } from '../lib';

const RegistrationForm = ({ close }: { close: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationFormInputs) => {
    console.log(data);
    reset();
    close();
  };

  return (
    <>
      <Title level={2} className="text-center mb-6">
        Registration
      </Title>
      <form
        className="flex flex-col justify-center items-center w-full max-w-sm mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          {...register('name')}
          error={errors.name?.message}
          placeholder="name"
          autocomplete="name"
          className="w-full"
        />
        <Input
          {...register('email')}
          error={errors.email?.message}
          placeholder="email"
          autocomplete="email"
          className="w-full"
        />
        <Input
          {...register('password')}
          type="password"
          withPasswordToggled
          error={errors.password?.message}
          placeholder="password"
          autocomplete="password"
          className="w-full"
        />
        <Button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition mb-[12px]"
        >
          Send
        </Button>
      </form>
    </>
  );
};

export default RegistrationForm;
