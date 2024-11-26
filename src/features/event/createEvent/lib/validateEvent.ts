import * as Yup from 'yup';

export const eventValidationSchema = Yup.object().shape({
  eventDate: Yup.date().nullable().typeError('Invalid date').required('Event date are required'),
  location: Yup.string().required('Event location is required'),
  maxParticipants: Yup.number()
    .required('Maximum number of participants is required')
    .min(1, 'The number of participants must be greater than 0'),
  audience: Yup.object().shape({
    adults: Yup.bool().required(),
    men: Yup.bool().required(),
    women: Yup.bool().required(),
  }),
});
