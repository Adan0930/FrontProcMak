import {useForm} from 'react-hook-form';
import apiAxios from '../../lib/axios/axios';
import './styles-form-company.css';

const FormSignUpCompany = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit = async (data) =>{
      try{
<<<<<<< Updated upstream
        const response = await apiAxios.post('/register/company', data);
=======
        const response = await axios.post('http://localhost:3001/register/company',data);
        if(response.status === 200){
          console.log('El formulario se envio correctamente')
        }else{
          console.error('Error al enviar el formulario') 
        }
>>>>>>> Stashed changes
      }catch(error){
        console.error('Error al enviar el formulario', error)
      }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nombre Compañia:</label>
            <input
              id="Name"
              type="text"
              {...register('NameCompany', { required: 'Nombre de la compañia es Requerido' })}
              className="form-input"
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>
    
          <div className="form-group">
            <label htmlFor="email" className="form-label">Correo electrónico:</label>
            <input
              id="Email"
              type="email"
              {...register('EmailCompany', {
                required: 'Correo electrónico es requerido',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Formato de correo electrónico inválido'
                }
              })}
              className="form-input"
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
    
          
    
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      );

         
};
export default FormSignUpCompany;