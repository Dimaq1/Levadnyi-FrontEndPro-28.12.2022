import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Form.css'

const Form = () => {


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Must be 2 characters')
        .matches(/^[a-zA-Z]+$/, 'Only letters')
        .required('Required field'),
      email: Yup.string()
        .email('Wrong email')
        .required('Required field'),
      phone: Yup.string()
        .matches(/^[0-9]{12}$/, 'Only numbers and 12 characters')
        .required('Required field'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });



  return (
    <form className='form' onSubmit={formik.handleSubmit} action="">

      <div className='wrapp'>
        <label htmlFor="name">Name</label>
        <input className='input'
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <span className='error'>{formik.errors.name}</span>
      </div>

      <div className='wrapp'>
        <label htmlFor="email">Email</label>
        <input className='input'
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <span className='error'>{formik.errors.email}</span>
      </div>

      <div className='wrapp'>
        <label htmlFor="phone">Phone</label>
        <input className='input'
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <span className='error'>{formik.errors.phone}</span>
      </div>

      <button style={{ background: 'grey' }} type="submit">Submit</button>

    </form>
  )
}

export default Form