
import * as yup from 'yup'



const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('username')
    .min(3, "Username must be at least 3 characters"),
    email: yup
    .string()
    .email('Must be a valid email address!')
    .required('Email is required'),
    password: yup
    .string()
    .required('Password is required!')
    .min(6, 'Password must be at least 6 characters'),
    tos: yup
    .boolean()
    .oneOf([true], 'Must accept terms and conditions.')
  })

  export default formSchema
