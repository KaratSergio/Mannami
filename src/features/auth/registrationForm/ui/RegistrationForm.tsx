import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validation from '@features/auth/validationSchemas';
import { Button, Input } from '@shared/formControls';
import { RegistrationFormInputs } from '../model/types';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validation.registrationSchema),
  });

  const onSubmit = (data: RegistrationFormInputs) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('name')} error={errors.name?.message} placeholder="name" type="text" />
      <Input {...register('email')} error={errors.email?.message} placeholder="email" type="text" />
      <Input
        {...register('password')}
        type="password"
        withPasswordToggled
        error={errors.password?.message}
        placeholder="password"
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default RegistrationForm;
