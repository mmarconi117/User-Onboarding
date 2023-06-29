import React from 'react';

const Form = (props) => {
  const { change, submit, errors } = props;
  const { username, email, password, tos } = props.values;

  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newVal = type === 'checkbox' ? checked : value;
    change(name, newVal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <div className='container'>

    <h1>My cool form!</h1>
    <p>{errors.username}</p>
    <p>{errors.password}</p>
    <p>{errors.email}</p>
    <p>{errors.tos}</p>
      <form onSubmit={submit}>
        <label>Name:&nbsp;
          <input
            value={username}
            onChange={onChange}
            name='username'
            type='text'
          />
        </label>
        <label>Email&nbsp;
          <input
            value={email}
            onChange={onChange}
            name='email'
            type='email'
          />
        </label>
        <label>Password&nbsp;
          <input
            value={password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>
        <label>Terms of Service
          <input
            type='checkbox'
            name='tos'
            checked={tos}
            onChange={onChange}
          />&nbsp;
        </label>
        <input type='submit' value='Create a Friend!' />
      </form>
    </div>
  );
};

export default Form;
