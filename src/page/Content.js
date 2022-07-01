import React from 'react';
import SetHelpData from '../components/SetHelpData';
import '../App.css'


function sidebar(){

  return(
    <aside className='sidebar'>
      <nav className='nav-item'>
        <SetHelpData />
      </nav>
      </aside>
  )
}

export default function Content() {
  return (
    <div>
      <nav className='nav-item'>
        <SetHelpData />
      </nav>
    </div>

  )
}