import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import Dropdown from './Dropdown';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
    }; 
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

      
  return (
      
      <nav className='navbar'>
          <Link to='/' className='navbar-logo'>
              Priority Pet
          </Link>
          <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' :  'nav-menu'}>
              <li className='nav-items'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                  </Link>
              </li>
              <li className='nav-items' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Link to='/content' className='nav-links' onClick={closeMobileMenu}>
                      Contenido <i className='fas fa-caret-down'/>
                  </Link>
                  {dropdown && <Dropdown />}
              </li>
              <li className='nav-items'>
                  <Link to='/support' className='nav-links' onClick={closeMobileMenu}>
                      Soporte <i className='fas fa-caret-down'/>
                  </Link>

              </li>
              <li className='nav-items'>
                  <Link to='https://prioritypet.club/' className='nav-links' onClick={closeMobileMenu}>
                      web
                  </Link>
              </li>
              <li className='nav-items'>
                  <Link to='/download' className='nav-links' onClick={closeMobileMenu}>
                      Descarga
                  </Link>
              </li>
              
          </ul>
          <Button />
      </nav>
      
  )
}

export default Navbar