import {useForm} from 'react-hook-form';
import './styles-login-users.css';


const LoginUserCompany = ()=>{
    const {register, handleSubmit, formState:{errors},watch} = useForm();

    const onSubmit = (data)=>{
        console.log(data);
    };

    return (
      <div className="form-container-login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="form-label" htmlFor="emailCompany">Email Company</label>
            <input
              className="form-input"
              id="emailCompany"
              type="email"
              {...register('emailCompany', { required: 'Email Company is required' })}
            />
            {errors.emailCompany && <span className="error-message">{errors.emailCompany.message}</span>}
          </div>
  
          <div className="form-group">
            <label className="form-label" htmlFor="username">Username</label>
            <input
              className="form-input"
              id="username"
              type="text"
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <span className="error-message">{errors.username.message}</span>}
          </div>
  
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              className="form-input"
              id="password"
              type="password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <span className="error-message">{errors.password.message}</span>}
          </div>
          <div className='form-group'>
            <span className='register'><a href='/register/user'>Registrarme</a></span>
          </div>
         
  
          <button className="submit-button" type="submit">Submit</button>
        </form>
      </div>
    );
};

export default LoginUserCompany;