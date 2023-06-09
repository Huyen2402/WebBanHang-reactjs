
import './App.css';
import { useState,createRef,useEffect } from 'react';
import {
  BrowserRouter as Router,
  useMatch ,
  Route,
  Link,
Routes,
useRoutes
} from "react-router-dom";
import ParentNav from './navbar'
import Product from './product';
import Footer from './footer';
import Category from './Category';


 function App() {
  return (
   
    
    <div>
      
      <ParentNav />
    
     
      {/* <Product /> */}
     
      <Footer />
    </div>
  );
};

function MyButton() {
  const colorButton = 'red';
  const change = 'green';
  const [count, setCount] = useState(colorButton);

  function handleClick() {
    console.log(change);
    setCount(change);
  }
  function handleScroll() {

    setCount(change);
  }

  return (
    <button style={{backgroundColor: count}} onClick={handleClick} onScroll={handleScroll}>
      Clicked {count} times
    </button>
  );
};
function MyApp1 () {

  const [offset, setOffset] = useState(0);
  const colorButton = 'red';
  const change = 'green';
  const [count, setCount] = useState(colorButton);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      
      // clean up code
      
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
     
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  console.log(offset); 
};
function ABC() {
  let style = { backgroundColor: 'red' };
  const [offset, setOffset] = useState(0);
  const colorButton = 'red';
  const change = 'green';
  const [count, setCount] = useState(colorButton);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    style.backgroundColor = 'green';
    
    
  }, []);
  console.log(offset);
  const col = offset > 0 ? change : colorButton;
  return (
    <div style={{width:'100px', height:'100px',  backgroundColor:col}} ></div>
  );
  
 
}
function Box() {
  
  const colorButton = 'red';
  const change = 'green';
  const [count, setCount] = useState(colorButton);
  const [y, yy] = useState(0);
  console.log(window.pageYOffset);
 
  function handleScroll() {
    const val = MyApp1();
    val >= 270 ? setCount(change) : setCount(colorButton);
    // setCount(change);
    
  }
  return (
    <div style={{width:'100px', height:'100px', backgroundColor:count}} onScroll={handleScroll}></div>
  );
}
const AAA =  function BBBB ()  {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/blog", element: <About /> },
    { path: "/contact", element: <About /> },
    { path: "/danh-muc", element: <Category /> },
    // ...
  ]);
  return routes;
};
 function CustomLinkExample() {
  return (
    <div>
    <Router>
    
          <AAA /> 
   
    </Router>
    </div>
  );
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/component2">Home</Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
export default App;
