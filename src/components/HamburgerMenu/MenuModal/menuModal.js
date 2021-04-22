import React, {useEffect,useState} from 'react';
import "../MenuModal/MenuModal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../../utils/fontawesome"

const Sidebar = (props) => {
    return(
      <>
        <nav className={props.menuState ? 'nav' : 'nav nav-closed'}>
          <ul className='menu-items-sidebar'>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <ul className='icon-bar'>
            <li>
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </li>
            <li>
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </li>
          </ul>
        </nav>
      </>
    )
  }

export default Sidebar;