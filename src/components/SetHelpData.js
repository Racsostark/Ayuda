import React from 'react'
import { Content } from '../data/HelpData';
import { Link } from 'react-router-dom';

export default function SetHelpData() {
  return (
    <ul>
        {Content.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                /*onClick={() => setClick(false)}*/
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
  )
}
