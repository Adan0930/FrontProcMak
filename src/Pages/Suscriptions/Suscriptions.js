import './styles-page-suscriptions.css';
import CardFreeSuscription from "../../Components/Suscriptions/card-free"
import CardPremium from '../../Components/Suscriptions/card-premium';
import CardExpert from '../../Components/Suscriptions/card-Expert';
const Suscriptions = ()=>{
    return(
        <div className="cards-suscription">
            <CardFreeSuscription/>
            <CardPremium/>
            <CardExpert/>
        </div>
        
    )
}

export default Suscriptions;