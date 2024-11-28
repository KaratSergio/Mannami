import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address').required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
});

export default loginSchema;
