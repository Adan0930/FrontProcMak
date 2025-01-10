import {useForm} from 'react-hook-form';
import './styles-login-users.css';
import axios from 'axios'; 


const LoginUserCompany = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = async (data)=>{
        try{
            const response = await axios.post('http://localhost:3001/login',data);
            if(response.status === 200){
              const token = response.data.token;
              localStorage.setItem('authToken', token);
              window.location.href= '/profile';
              alert('Inicio de sesion exitoso');
            }else{
              alert('Error de login')
            }
        }catch(error){
          console.error(error)
          alert('Existe un error al hacer login')
        }

    };

    return (
      <div className="form-container-login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <a href='/'>
              <img className='logo-login' src='images/Logo-ProcMak.svg' alt='logo' width={'100px'}></img>
            </a>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="EmailCompany">Email Company</label>
            <input
              className="form-input"
              id="EmailCompany"
              type="email"
              {...register('EmailCompany', { required: 'Email Company is required' })}
            />
            {errors.emailCompany && <span className="error-message">{errors.emailCompany.message}</span>}
          </div>
  
          <div className="form-group">
            <label className="form-label" htmlFor="NameUser">Username</label>
            <input
              className="form-input"
              id="NameUser"
              type="text"
              {...register('NameUser', { required: 'Username is required' })}
            />
            {errors.username && <span className="error-message">{errors.username.message}</span>}
          </div>
  
          <div className="form-group">
            <label className="form-label" htmlFor="Password">Password</label>
            <input
              className="form-input"
              id="Password"
              type="password"
              {...register('Password', { required: 'Password is required' })}
            />
            {errors.password && <span className="error-message">{errors.password.message}</span>}
          </div>
          <div className='form-group'>
            <span className='register'><a href='/register/user'>Registrarme</a></span>
          </div>
         
  
          <button className="submit-button" type="submit">Acceder</button>
        </form>
      </div>
    );
};

export default LoginUserCompany;