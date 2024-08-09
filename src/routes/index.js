import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import  Navbar  from '../Components/Navbar/navbar.js';
import Login from '../Pages/Login/login.js';
import FormSignUpCompany from '../Components/FormRegisterCompany/form-company.js';
import FormUserCompany from '../Components/FormRegisterUserCompany/form-user-company.js';
import CardSuscription from '../Components/Suscriptions/card-suscriptions.js';
 

const ComRoutes = ()=>{
    return(
        <Router>
            
            <Routes>
                <Route path='/' Component={Navbar} />
                <Route path='/login' Component={Login}/>
                <Route path='/register/user' Component={FormUserCompany}/>
                <Route path='/register/company' Component={FormSignUpCompany}/>
                <Route path='/Suscripciones' Component={CardSuscription}/>
            </Routes>
            
        </Router>
    )
}

export default ComRoutes;