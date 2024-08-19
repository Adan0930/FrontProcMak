import{useForm} from 'react-hook-form';
import './styles-form-user-company.css';
import axios from 'axios';

const FormUserCompany = ()=>{

    const{register,handleSubmit,formState:{errors},getValues }=  useForm();

    const onSubmit = async(data)=>{
       try{
        const response = await axios.post('/register/user', data);

        if(response.status === 200){
          console.log('error en la insercion')
        }else{
          console.error('Existe un error ')
        }
       }catch(error){
      console.error('El usuario no se registro', error)
      }
    };

    return (
  <form onSubmit={handleSubmit(onSubmit)} className="form-container">

    <div className='form-group'>
      <a href='/'>
        <img src='/images/Logo-ProcMak.svg' className='logo-procmak' alt='Logo'></img>
      </a>
    </div>
    <div className="form-group">
      <label htmlFor="company-email" className="form-label">Email de la Compañía:</label>
      <input
        id="company-email"
        type="email"
        {...register('companyEmail', {
          required: 'Email de la compañía es requerido',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Formato de email inválido'
          }
        })}
        className="form-input"
        aria-describedby={errors.companyEmail ? 'company-email-error' : undefined}
      />
      {errors.companyEmail && <p id="company-email-error" className="error-message">{errors.companyEmail.message}</p>}
    </div>
    <div className="form-group">
      <label htmlFor="username" className="form-label">Nombre de Usuario:</label>
      <input
        id="username"
        type="text"
        {...register('username', { required: 'Nombre de usuario es requerido' })}
        className="form-input"
        aria-describedby={errors.username ? 'username-error' : undefined}
      />
      {errors.username && <p id="username-error" className="error-message">{errors.username.message}</p>}
    </div>

    <div className="form-group">
      <label htmlFor="password" className="form-label">Contraseña:</label>
      <input
        id="password"
        type="password"
        {...register('password', { required: 'Contraseña es requerida' })}
        className="form-input"
        aria-describedby={errors.password ? 'password-error' : undefined}
      />
      {errors.password && <p id="password-error" className="error-message">{errors.password.message}</p>}
    </div>

    <div className="form-group">
      <label htmlFor="confirm-password" className="form-label">Confirmar Contraseña:</label>
      <input
        id="confirm-password"
        type="password"
        {...register('confirmPassword', {
          required: 'Confirmar contraseña es requerida',
          validate: value => value === getValues('password') || 'Las contraseñas deben coincidir'
        })}
        className="form-input"
        aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
      />
      {errors.confirmPassword && <p id="confirm-password-error" className="error-message">{errors.confirmPassword.message}</p>}
    </div>
    <div className='form-group'>
      <a href='/Suscripciones' className='suscripcions-link'>Suscripciones</a>
    </div>

    <button type="submit" className="submit-button">Enviar</button>
  </form>
);

}

export default FormUserCompany;