import './style.css';
import React, { useRef, useEffect, useState } from "react";
import useData from '../src/getData';
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import config from '../src/config';
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function DropDown() {
  const dropdownRef = useRef(null);
  console.log(dropdownRef);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  console.log(isActive);
  const onClick = () => setIsActive(!isActive);
    console.log(isActive);
    const Value = useData(config.urlGetTypeProduct);
    
  const [typeproducts, setTypeProducts] = useState([])




  useEffect ( () => {
    if(Value[0]?.data){
      setTypeProducts(Value[0]?.data)
    }
  },[Value])
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
              <li key={item.ID}>{item.Name}</li>
            ))
           }
          </ul>
        </nav>
      </div>
    </div>
  );
}
