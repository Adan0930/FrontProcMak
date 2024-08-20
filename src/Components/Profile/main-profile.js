import Sidebar from '../Profile/navbar-profile';
import TopBar from '../Profile/top-bar';
import './main-profile.css';

const MainProfile=()=>{
    return(
        <div className='profile'>
        <Sidebar/>
        <div className='main-content'>
            <TopBar/>
        </div>
    </div>
    )
}

export default MainProfile;