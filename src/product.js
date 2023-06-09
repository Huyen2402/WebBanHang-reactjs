import { React, useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

import config from "../src/config";
import useData from "../src/getData";
import _, { forEach } from "lodash";
import { code } from "fontawesome";
function SessionCart(id,name, price, img, codeid) {
  let cart = {
    id: id,
    name: name,
    price: price,
    img: img,
   
    quantity: 1,
    check: false
  };
  console.log("SessionCart", cart);
  return cart;
}

function Product() {
  const n = localStorage.getItem('Cartn');
  const [products, setProducts] = useState([]);
  let listCart = JSON.parse(localStorage.getItem('Cartn'));
  const [count, setCount] = useState(listCart);
  const [cart, setCart] = useState([]);
  
  const AddToCart = (el) => {
    console.log("AddToCart",el);
    let id = el.ID
    let name = el.Name;
    
    let price = el.Price;
    let img = el.Img;
   
   
    let cartItem =  SessionCart(id,name,price,img);
    console.log("cartItem",cartItem);
    // let listCart= localStorage.getItem('Cartn');
   
    if(_.isNil(localStorage.getItem('Cartn'))){
      console.log("null");
      console.log("check", _.isNil(localStorage.getItem('Cartn')));
       listCart =[cartItem];
      console.log("listCart1",listCart);
      localStorage.setItem('Cartn', JSON.stringify(listCart) );
      return (alert("Thêm vào giỏ thành công"));
    }
    else{
      console.log("ko null");
      
    
     for (let index = 0; index < listCart.length; index++) {
      if(listCart[index].id === cartItem.id ){
        console.log("TH1");
        listCart[index].quantity++;
        break;
      }
      if(listCart[index].id !== cartItem.id && index === listCart.length-1){
        console.log("TH2");
        listCart.push(cartItem);
          break;
      }
      
     }
     
      console.log("localStorage.getItem('Cartn')",JSON.parse(localStorage.getItem('Cartn')));
      console.log("abc",listCart);
      
          console.log("listCart2",listCart);
          localStorage.setItem('Cartn', JSON.stringify(listCart) );
      return (alert("Thêm vào giỏ thành công"));
      
    }
    
  };

  useEffect(() => {
    async function get() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const data = await useData(config.urlGetProduct);
      setProducts(data.data);
    }

    get();
  }, []);

  function AddCart(pro) {
    console.log("hello");
    console.log("pro", pro);
    let name = pro.Name;

    let price = pro.Price;
    let img = pro.Img;
    let codeid = pro.CodeID;
    let cart = SessionCart(name, price, img, codeid);

    return localStorage.setItem("Cartn", JSON.stringify(cart));
  }

  return (
    <MDBContainer container className="my-5">
      <h1 className="text-center">Sản phẩm</h1>
      <MDBRow>
        {products?.length &&
          products.map((item, i) => (
            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0" key={item.id}>
              <MDBCard>
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">{item.Name}</p>
                </div>
                <MDBCardImage src={item.Img} position="top" alt="Laptop" />
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
                    {/* <MDBBtn
                      // onClick={() => addToCart(item)}
                      className="mx-2"
                      color="dark"
                    >
                      Mua hàng
                    </MDBBtn> */}
                    <button
                      className="ripple ripple-surface btn btn-dark mx-2"
                      onClick={() => AddToCart(item)}
                    >
                      Mua hàng
                    </button>
                    <h5 className="text-dark mb-0">{item.Price}</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available:{" "}
                      <span class="fw-bold">{item.TotalProduct}</span>
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
            </MDBCol>
          ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default Product;
