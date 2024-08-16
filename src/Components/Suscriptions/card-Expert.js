import './styles-card-expert.css';

const CardExpert = ()=>{
    return(
        <div className="card-expert">
        <h2 className="card-title">Expert</h2>
        <ul>
            <li className='li-free'>Hasta 500 usuarios </li>
            <li className='li-free'>Acceso a varias funcionalidades</li>
            <li className='li-free'>Acceso Ilimitado</li>
            <li className='li-free'>Acceso a la App</li>
        </ul>
        <p className="card-price">1000/mes</p>
        <button className="card-button"><a href='/register/company' className='link-free'>Suscribirse Ahora</a></button>
      </div>
    )
}

export default CardExpert;