import { Input } from '@shared/formControls';
import { Button, Title } from '@shared/userExperience';
import { LoginFormInputs } from '../model/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../lib';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="flex flex-col justify-center items-center w-full max-w-sm mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title level={2} className="text-center mb-6">
        Login
      </Title>

      <Input
        {...register('email')}
        error={errors.email?.message}
        placeholder="Email"
        autocomplete="email"
        className="w-full"
      />
      <Input
        {...register('password')}
        type="password"
        withPasswordToggled
        error={errors.password?.message}
        placeholder="Password"
        autocomplete="password"
        className="w-full"
      />
      <Button
        type="submit"
        className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition mb-[12px]"
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
