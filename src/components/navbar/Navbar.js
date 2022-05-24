import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import Dropdown from './Dropdown';
import DropdownContent from './DropdownContent';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

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


      const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
          setDropdown2(false);
        } else {
          setDropdown2(true);
        }
    };
      const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
          setDropdown2(false);
        } else {
          setDropdown2(false);
        }
      };
     
  return (
      <>
      <nav className='navbar'>
          <Link to='/image/Prioritypet-logo.png' className='navbar-logo'>
              Priorytypet
          </Link>
          <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' :  'nav-menu'}>
              <li className='nav-items'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Inicio
                  </Link>
              </li>
              <li className='nav-items' onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Contenido <i className='fas fa-caret-down'/>
                  </Link>
                  {dropdown2 && <DropdownContent />}
              </li>
              <li className='nav-items' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Soporte <i className='fas fa-caret-down'/>
                  </Link>
                  {dropdown && <Dropdown />}
              </li>
              <li className='nav-items'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      web
                  </Link>
              </li>
              <li className='nav-items'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Descarga
                  </Link>
              </li>
              
          </ul>
          <Button />
      </nav>
      </>
  )
}

export default Navbar