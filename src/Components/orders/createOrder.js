import {useForm} from 'react-hook-form';
import './createO.css';

const CreateOrder = ()=>{
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes enviar los datos a tu backend o realizar otras acciones
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="order-form">
      {/* WORK ORDER */}
      <div className="form-group">
        <label htmlFor="workOrder">Orden De Trabajo</label>
        <input
          className="form-control"
          {...register('WorkOrder', { required: 'El numero de orden es requerido' })}
        />
        {errors.WorkOrder && <p className="error-message">{errors.WorkOrder.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="Client">Cliente</label>
        <input
          className="form-control"
          {...register('Client', { required:'El cliente es requerido'})}
        />
        {errors.Client && <p className="error-message">{errors.Client.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="Name">Nombre</label>
        <input
          className="form-control"
          {...register('Name', { required:'Este Campo Es Requerido'})}
        />
        {errors.Name && <p className="error-message">{errors.Name.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="Size">Medida</label>
        <input
          className="form-control"
          {...register('Size')}
        />
      </div>

      <div className="form-group">
        <label htmlFor="Color">Color</label>
        <input
          className="form-control"
          {...register('Color')}
        />
      </div>

      <div className="form-group">
        <label htmlFor="deliveryDate">Fecha de Entrega</label>
        <input
          id="deliveryDate"
          type="date"
          className="form-control"
          {...register('deliveryDate', { required: 'La fecha de entrega es obligatoria' })}
        />
        {errors.deliveryDate && <p className="error-message">{errors.deliveryDate.message}</p>}
      </div>


      <button type="submit" className="submit-button">Crear Orden de Trabajo</button>
    </form>
  );

};

export default CreateOrder;