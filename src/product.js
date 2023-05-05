import {React, useState,useEffect} from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn
} from "mdb-react-ui-kit";

import config from '../src/config';
import useData from '../src/getData';
import _ from 'lodash';
import { code } from "fontawesome";
function SessionCart(name, price, img, codeid) {
   let cart = {
    name : name,
  price: price,
  img : img,
  codeid :codeid,
  quantity :1,
  }
  return cart;
}
function AddCart(item) {
  let name = item.Name;
  
  let price = item.Price;
  let img = item.Img;
  let codeid = item.CodeID;
  let listCart = [];
  if(_.isNil(localStorage.getItem('Cart'))){
    const cart =  SessionCart(name,price,img,codeid);
    listCart.push(cart);
    localStorage.setItem('Cart', JSON.stringify(cart) );
    
   
   
  }else{
    listCart = localStorage.getItem('Cart');
    if(localStorage.getItem('Cart') && _.isNil(item.ID)){
    const cart =  SessionCart(name,price,img,codeid);
    listCart.push(cart);
      localStorage.setItem('Cart', JSON.stringify(listCart) );
    }
    else{
      const up = localStorage.getItem('Cart');
      
    }
  }
  
}

function Product() {
  const Value = useData(config.urlGetProduct);

  const [products, setProducts] = useState([])
  console.log(JSON.stringify(localStorage.getItem('Cart')));



  useEffect ( () => {
    if(Value[0]?.data){
      setProducts(Value[0]?.data)
    }
  },[Value])
  console.log(products)
  


  
  return (
    
    <MDBContainer container className="my-5">
       <h1 className='text-center'>Sản phẩm</h1>
      <MDBRow>
      
        {
          products?.length && products.map((item, i) => 
            (
            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0" key={item.id} >
              <MDBCard>
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">{item.Name}</p>
                  
                </div>
                <MDBCardImage
                  src={item.Img}
                  position="top"
                  alt="Laptop"
                />
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                      {/* {{i}} */}
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>${item.Price}</s>
                    </p>
                  </div>
    
                  <div className="d-flex justify-content-between mb-3">
                  <MDBBtn onClick={AddCart(item)} className='mx-2' color='dark'>
        Mua hàng
      </MDBBtn>
                    <h5 className="text-dark mb-0">{item.Price}</h5>
                  </div>
    
                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available: <span class="fw-bold">{item.TotalProduct}</span>
                    </p>
                    <div class="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>)
          )
        } 
        
      </MDBRow>
    </MDBContainer>
  );
}

export default Product;