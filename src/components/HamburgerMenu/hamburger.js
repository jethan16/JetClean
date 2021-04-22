import React, {useEffect,useState} from 'react';
import "../HamburgerMenu/Hamburger.css"
import Sidebar from "../HamburgerMenu/MenuModal/menuModal"

// Conditionally rendering sidebar menu by tracking state (t or f), and passing it as a prop to the sidebar component.

const HamburgerMenu = () => {

    // Menu State - False by default.
    const [menuState, setMenuState] = useState(false)

    // Menu Functionality.
    const openMenu = () => {
    setMenuState(!menuState)
    }

    const closeMenu = () => {
    setMenuState(!menuState)
    }

    return(
        <>
        <Sidebar menuState={menuState} closeMenu={closeMenu}/>
        <div onClick={openMenu} className={`menu-button ${!menuState ? 'menu-button-inactive' : 'menu-button-active'}`}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
        </>
    )
}

export default HamburgerMenu;