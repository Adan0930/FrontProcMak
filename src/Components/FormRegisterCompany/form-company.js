import {useForm} from 'react-hook-form';
import './styles-form-company.css';
import axios from 'axios';

const FormSignUpCompany = ()=>{
    const {register, handleSubmit, formState:{errors}} = useForm();
    
    const onSubmit = async (data) =>{
      try{
        const response = await axios.post('/register/company',data);
        if(response.status === 200){
          console.log('El formulario se envio correctamente')
        }else{
          console.error('Error al enviar el formulario')
        }
      }catch(error){
        console.error('Error al enviar el formulario', error)
      }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nombre Compañia:</label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Nombre de la compañia es Requerido' })}
              className="form-input"
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>
    
          <div className="form-group">
            <label htmlFor="email" className="form-label">Correo electrónico:</label>
            <input
              id="email"
              type="email"
              {...register('email', {
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