import React, { useState } from 'react'
import formSchema from './formSchema'
import Form from './Form'
import * as yup from 'yup'
import axios from 'axios'
import './App.css';

const App = () => {

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors =   {
  username: '',
  email: '',
  password: '',
  tos: ''
}


  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])






  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  };

  const handleSubmit = () => {
    // Handle form submission logic
    axios.post(`https://reqres.in/api/users`, formValues)
      .then(res => {
        setFormValues(res.data, ...users)
      })
      .catch(err => console.error(err))
  };

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  return (
    <div className='App'>

      <Form change={handleChange}
       submit={handleSubmit}
       values={formValues}
       errors={formErrors}
       />
       {users.map(user => (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
       ))}
    </div>
  );
};

export default App;
