import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home/home.js';
import Login from '../Pages/Login/login.js';
import FormSignUpCompany from '../Components/FormRegisterCompany/form-company.js';
import FormUserCompany from '../Components/FormRegisterUserCompany/form-user-company.js';
import Suscriptions from '../Pages/Suscriptions/Suscriptions.js';
import CardSuscription from '../Components/Suscriptions/card-suscriptions.js';
import Profile from '../Pages/home-profile/profile.js';

 

const ComRoutes = ()=>{
    return(
        <Router>
            
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/login' Component={Login}/>
                <Route path='/register/company' Component={FormSignUpCompany}/>

                <Route path='/Suscripciones' Component={Suscriptions}/>

                <Route path='/register/user' Component={FormUserCompany}/>
                <Route path='/Suscripciones' Component={CardSuscription}/>
                <Route path='/profile' Component={Profile}/>

            </Routes>
            
        </Router>
    )
}

export default ComRoutes;