import { Button, Input } from '@shared/formControls';
import { LoginFormInputs } from '../model/types';
import validation from '@features/auth/validationSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validation.loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

export default LoginForm;
