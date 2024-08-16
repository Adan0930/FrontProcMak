import './styles-card-premium.css';

const CardPremium = ()=>{
    return(
        <div className="card-Premium">
        <h2 className="card-title">Premium</h2>
        <ul>
            <li className='li-free'>Hasta 100 usuarios </li>
            <li className='li-free'>Acceso a varias funcionalidades</li>
            <li className='li-free'>Acceso Ilimitado</li>
            <li className='li-free'>Acceso a la App</li>
        </ul>
        <p className="card-price">$500/mes</p>
        <button className="card-button"><a href='/register/company' className='link-free'>Suscribirse Ahora</a></button>
      </div>
    )
};

export default CardPremium;