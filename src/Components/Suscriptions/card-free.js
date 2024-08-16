import './styles-card-free.css'

const CardFreeSuscription = ()=>{
    return(
        <div className="card-free">
        <h2 className="card-title">Gratis</h2>
        <ul>
            <li className='li-free'>Hasta 50 usuarios </li>
            <li className='li-free'>Acceso a varias funcionalidades</li>
            <li className='li-free'>Acceso por 30 dias</li>
            <li className='li-free'>Acceso a la App</li>
        </ul>
        <p className="card-price">Gratis</p>
        <button className="card-button"><a href='/register/company' className='link-free'>Suscribirse Ahora</a></button>
      </div>
    )
}

export default CardFreeSuscription;