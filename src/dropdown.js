import './style.css';
import React, { useRef, useEffect, useState, useRoutes } from "react";
import useData from '../src/getData';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import config from '../src/config';
import Category from './Category';
import {
NavLink
} from "react-router-dom";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */

export default function DropDown() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const dropdownRef = useRef(null);
  console.log(dropdownRef);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  console.log(isActive);
  const onClick = () => setIsActive(!isActive);
    console.log(isActive);
    const Value = useData(config.urlGetTypeProduct);
    
  const [typeproducts, setTypeProducts] = useState([])

  const [typeproducts1, setTypeProducts1] = useState([])

  async function get1(id) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = await useData(config.urlFindByID+ id);
    console.log("config.urlFindByID+ id",config.urlFindByID+ id);
    setTypeProducts1(data.data);
    localStorage.setItem('itemCate', JSON.stringify(typeproducts1))
    console.log(typeproducts1);
  }
  useEffect ( () => {
    async function get() {
      
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const data = await useData(config.urlGetTypeProduct);
      setTypeProducts(data.data);
    }

    get();
  },[])
  console.log(typeproducts)
  return (
    <div className="">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Danh Mục</span>
          
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          
          <ul>
           {
            
            typeproducts.map(item =>(
              <li className="nav-item"  key={item.ID}>
                 <NavLink
                exact
                to="/danh-muc"
                activeClassName="active"
                className="nav-links"
               onClick={ ()=> get1(item.id)}
              >
               {item.Name}
              </NavLink>
                </li>
            ))
           }
          </ul>
        </nav>
      </div>
    </div>
  );
}
