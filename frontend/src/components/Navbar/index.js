import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Login from '../../pages/login';
class Navbar extends Login {
    
    render() {
      if (this.state.isLoggedIn) {
        return (
          <>
            <Nav>

              <Bars />

              <NavMenu>

                <NavLink to='/Home'>
                  Home  
                </NavLink>
      
                <NavLink to='/Live'>
                  Live Capacities
                </NavLink>

                <NavLink to='/Catalog'>
                  Catalog
                </NavLink>
      
              </NavMenu>

              <NavBtn>
                <NavBtnLink to='/login'>Sign In</NavBtnLink>
              </NavBtn>

            </Nav>
          </>
        );
    } else {
      return (
        <>
          <Nav>
            <Bars />
            <NavMenu>

              <NavLink to='/Home'>
                Home  
              </NavLink> 
            </NavMenu>

            <NavBtn>
              <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>

          </Nav>
        </>
      );
    }
  }
}



    


  
export default Navbar;