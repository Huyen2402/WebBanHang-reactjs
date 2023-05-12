
import React from 'react';
import { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  useMatch ,
  Route,
  Link,
Routes,
useRoutes,
Switch,

NavLink
} from "react-router-dom";
import _ from 'lodash';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';
import DropDown from './dropdown';
import Product from './product';
import Login from './login';
import Cart from './cart';
import Category from './Category';
import {Logout} from '../src/useDetectOutsideClick'
//Pages
const Home = () => {
  console.log("hey");
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};
const DropDownNav = ()=>{
  return (
    <MDBDropdown>
      <MDBDropdownToggle>Danh Mục</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem >Action</MDBDropdownItem>
        <MDBDropdownItem >Another action</MDBDropdownItem>
        <MDBDropdownItem >Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}




function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  let style = 'green' ;
  const [offset, setOffset] = useState(0);
  const colorButton = '#efefef05';
  const change = 'black';
  const [count, setCount] = useState(colorButton);
  const myStyle={
    backgroundImage: 
"url('https://theme.hstatic.net/1000362438/1000729754/14/ms_banner_img2.jpg?v=414')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
};
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    
    
  }, []);
  console.log(offset);
  const col = offset > 0 ? change  :  colorButton;
  const local = _.isNil(localStorage.getItem('Login'));
  
  const nav = {
   
       backgroundColor: col,
      height: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.2rem',
      position: 'sticky',
      top: '0',
      zindex: '20',
    
  }

  return (
   
    <div style={{opacity:'0.8'}}>
    <div style={myStyle} >
      
     <div className={click ? "main-container " : ""}  onClick={()=>Close()} />
     
      <nav style={nav} className="navbar" >
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Oriana
           
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Trang Chủ
              </NavLink>
            </li>
            <li className="nav-item">
              
            <DropDown />
              
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={!local? Logout : "/dang-nhap"}
                activeClassName="active"
                className="nav-links"
                onClick={!local ? Logout : ""}
              >
                
                {!local ? "Đăng Xuất" : "Đăng nhập"}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gio-hang"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
               <MDBIcon fas icon="shopping-cart" /> Giỏ hàng
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
    </div>
  );
  
 
}

const AAA =  function BBBB ()  {
  let routes = useRoutes([
    { path: "/", element: <Product /> },
    { path: "/dang-nhap", element: <Login /> },
    { path: "/gio-hang", element: <Cart /> },
    { path: "/danh-muc", element: <Category /> },
    
    // ...
  ]);
  return routes;
};
function ParentNav() {
  
  return (
    <>
     
       <Router>
        <NavBar />

        <div className="">
       
        <AAA />

        </div>
       
   


      </Router>
    </>
  );
}
export default ParentNav;