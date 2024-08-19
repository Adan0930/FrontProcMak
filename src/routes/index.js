import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import  Navbar  from '../Components/Navbar/navbar.js';
import Login from '../Pages/Login/login.js';
import FormSignUpCompany from '../Components/FormRegisterCompany/form-company.js';
import FormUserCompany from '../Components/FormRegisterUserCompany/form-user-company.js';
import CardSuscription from '../Components/Suscriptions/card-suscriptions.js';
import Profile from '../Pages/home-profile/profile.js';
 

const ComRoutes = ()=>{
    return(
        <Router>
            
            <Routes>
                <Route path='/' Component={Navbar} />
                <Route path='/login' Component={Login}/>
                <Route path='/register/company' Component={FormSignUpCompany}/>
                <Route path='/register/user' Component={FormUserCompany}/>
                <Route path='/Suscripciones' Component={CardSuscription}/>
                <Route path='/profile' Component={Profile}/>
            </Routes>
            
        </Router>
    )
}

export default ComRoutes;