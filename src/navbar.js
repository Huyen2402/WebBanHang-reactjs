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

// const AAA =  function BBBB ()  {
//   let routes = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "/component2", element: <About /> },
//     // ...
//   ]);
//   return routes;
// };
//  const Navbar = function CustomLinkExample() {
//   return (
//     <div>
//     <Router>
    
//         {/* <OldSchoolMenuLink
//           activeOnlyWhenExact={true}
//           to="/"
//           label="Home"
//         />
//         <OldSchoolMenuLink to="/about" label="About" />

//         <hr /> */}

//           <AAA /> 
         
      
        
     
//     </Router>
//     </div>
//   );
// }

// function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
//   let match = useMatch({
//     path: to,
//     exact: activeOnlyWhenExact
//   });

//   return (
//     <div className={match ? "active" : ""}>
//       {match && "> "}
//       <Link to={to}>{label}</Link>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//       <Link to="/component2">Home</Link>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }
// export default Navbar;


//Pages
const Home = () => {
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
            <i className="fa fa-code"></i>
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
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
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
function ABC() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  let style = { backgroundColor: 'black' };
  const [offset, setOffset] = useState(0);
  const colorButton = 'red';
  const change = 'green';
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
    style.backgroundColor = 'green';
    
    
  }, []);
  console.log(offset);
  const col = offset > 0 ? style : '';
  

  return (
    <div style={{opacity:'0.9'}}>
    <div style={myStyle} onScroll={{}}>
      
     <div className={click ? "main-container " : ""}  onClick={()=>Close()} />
     
      <nav style={{backgroundColor:col}} className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Oriana
            <i className="fa fa-code"></i>
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
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
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
function ParentNav() {
  
  return (
    <>
     
       <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default ParentNav;