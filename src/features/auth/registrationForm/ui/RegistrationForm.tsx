import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '@shared/formControls';
import { Button } from '@shared/userExperience';
import { RegistrationFormInputs } from '../model/types';
import { registrationSchema } from '../lib';

const RegistrationForm = () => {
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
  };

  return (
    <form className="max-w-md" onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('name')} error={errors.name?.message} placeholder="name" autocomplete="name" />
      <Input {...register('email')} error={errors.email?.message} placeholder="email" autocomplete="email" />
      <Input
        {...register('password')}
        type="password"
        withPasswordToggled
        error={errors.password?.message}
        placeholder="password"
        autocomplete="password"
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default RegistrationForm;
