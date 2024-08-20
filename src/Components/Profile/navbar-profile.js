import { Link } from 'react-router-dom';
import {GoHome} from 'react-icons/go';
import { GrDocumentConfig } from "react-icons/gr";
import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import './styles-sidebar.css';

const Sidebar = ()=>{
    
    
    return (
      <div>
        
        <div className={'sidebar'}>
          <ul className="sidebar-menu">
            <li>
              <Link to="/home"><GoHome className='icon-home'/>Home</Link>
            </li>
            <li>
              <Link to="/orders"><GrDocumentConfig className='icon-orders'/>Orders</Link>
            </li>
            <li>
              <Link to="/chat"><IoChatboxEllipsesOutline className='icon-chat'/>Chat</Link>
            </li>
            <li>
              <Link to="/status"><IoSettingsOutline className='icon-set'/>Configuración</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};
export default Sidebar;