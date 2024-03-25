import React from 'react';
//import { NavLink } from "react-bootstrap";
import {Nav, NavLink, NavMenu} from "./NavBarStyle"


/*
function App(){

    <NavBar/>
    <h2>TESTE</h2> 

}
*/

export const NavBar = () => {

    return (
        <Nav>
            <NavMenu>
                <NavLink to="/" activeStyle>
                    HOME
                </NavLink>
            </NavMenu>
        </Nav>


    );
}

export default NavBar;
