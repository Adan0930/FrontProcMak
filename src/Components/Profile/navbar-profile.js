import { Link } from 'react-router-dom';
import './styles-sidebar.css';

const Sidebar = ()=>{
    
    
    return (
      <div>
        
        <div className={'sidebar'}>
          <ul className="sidebar-menu">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/status">Status</Link>
            </li>
          </ul>
        </div>
      </div>
    );
}
export default Sidebar;