import {useForm} from 'react-hook-form';
import {useState} from 'react';
import './createO.css';

const CreateOrder = ()=>{
  const { register, handleSubmit, formState: { errors },trigger } = useForm();
  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes enviar los datos a tu backend o realizar otras acciones
  };

  const nextStep = async ()=>{
    let valid = false;
    if(step === 1){
      valid = await trigger(['WorkOrder','Client','Name','DeliveryDate'])
    }
    if(valid){
      setStep(step + 1);
    }
  }
  const prevStep = () => {
    setStep(step - 1);
  };
  
// FORM 
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="order-form">
      <h1>Orden de Trabajo</h1>
      {/* WORK ORDER PART ONE  */}
      {step === 1 && (
         <div className="form-group">
          <h2>Datos</h2>
         <label htmlFor="workOrder">No. Orden De Trabajo</label>
         <input
           className="form-control"
           {...register('WorkOrder', { required: 'El numero de orden es requerido' })}
         />
         {errors.WorkOrder && <p className="error-message">{errors.WorkOrder.message}</p>}
        {/* CLIENT  */}
         <label htmlFor="Client">Cliente</label>
        <input
          className="form-control"
          {...register('Client', { required:'El cliente es requerido'})}
        />
        {errors.Client && <p className="error-message">{errors.Client.message}</p>}
        {/* NAME  */}
        <label htmlFor="Name">Nombre de la Orden</label>
        <input
          className="form-control"
          {...register('Name', { required:'Este Campo Es Requerido'})}
        />
        {errors.Name && <p className="error-message">{errors.Name.message}</p>}
        {/*DATE*/}
        <label htmlFor="DeliveryDate">Fecha de Entrega</label>
        <input
          id="DeliveryDate"
          type="date"
          className="form-control"
          {...register('DeliveryDate', { required: 'Ingrese una Fecha de Entrega' })}
        />
        {errors.DeliveryDate && <p className="error-message">{errors.DeliveryDate.message}</p>}
       </div>
        )}
      {/* WORK ORDER PART TWO  */}
      {step === 2 &&(
        <div className="form-group">
          <h2>Especificaciones Funcionales</h2>
            {/* DESCRIPTION */}
          <label htmlFor='Description'>Descripcion</label>
          <input className='form-control' 
          {...register('Description')} />

          {/* CHARACTERISTICS  */}
          <label htmlFor="Characteristics">Caracteristicas Principales</label>
          <input
          className="form-control"
          {...register('Characteristics')}
          />

          {/* SIZE  */}
          <label htmlFor="Size">Medidas</label>
          <input
          className="form-control"
          {...register('Size')}
          />

          {/* COLOR  */}
          <label htmlFor="Color">Color</label>
          <input
          className="form-control"
          {...register('Color')}
          />
        </div>
      )}

      {/* WORK ORDER PART TREE  */}
      {step === 3 &&(
        <div className='form-group'>
          <h1>Especificaciones de Diseño</h1>
           <label htmlFor='Materiales'/>
           <input
            className='form-control'
            {...register('Materiales')}
          /> 
        </div>
      )}



      <div className="button-group">
          {step > 1 && (
            <button onClick={prevStep} className="submit-button">
              Atrás
            </button>
          )}
          {step < 3 ? (
            <button onClick={nextStep} className="submit-button">
              Siguiente
            </button>
          ) : (
            <button
            type='submit'
              className="submit-button"
              onClick={() => alert("Login completado")}
            >
              Crear Orden de Trabajo
            </button>
          )}
        </div>
    </form>
  );

};

export default CreateOrder;
