import * as Yup from 'yup';

const registrationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(14, 'Too Long!').required('Required'),
  email: Yup.string().email('Please enter a valid email address').required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
});

export default registrationSchema;
