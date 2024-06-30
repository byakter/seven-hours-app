import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
  email: string;
  password: string;
};

const RegisterUser = () => {
  const { register, handleSubmit } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);

  }

  return (
    <form className='register-user-form' onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email')}
        type='text'
        placeholder='Email'
      />
      <input
        {...register('password')}
        type='text'
        placeholder='Password'
      />
      <button type='submit'>Submit</button>
    </form>

  );

};

export default RegisterUser;
