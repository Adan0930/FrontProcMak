import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import  Navbar  from '../Components/Navbar/navbar.js';
import FormSignUpCompany from '../Components/FormRegisterCompany/form-company.js';
 

const ComRoutes = ()=>{
    return(
        <Router>
            
            <Routes>
                <Route path='/' Component={Navbar} />
                <Route path='/register' Component={FormSignUpCompany}/>
            </Routes>
            
        </Router>
    )
}

export default ComRoutes;