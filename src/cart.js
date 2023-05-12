import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBContainer } from 'mdb-react-ui-kit';
import _, { forEach } from "lodash";
import config from '../src/config';
import axios from 'axios';
export default function Cart() {
  let listCart = JSON.parse(localStorage.getItem('Cartn'));
  console.log("cart",listCart);
  function DeleteProduct(id) {
    console.log("sdg");
    listCart.pop(listCart[0])
    console.log(listCart);
    localStorage.setItem('Cartn',JSON.stringify(listCart) )
  }

  function Payment() {
    let isLogin = JSON.parse(localStorage.getItem('Login'));
    let Cart = JSON.parse(localStorage.getItem('Cartn'));
    if(_.isNil(isLogin)){
      return(alert("Vui lòng đăng nhập"))
    }else{
      let total = 0;
      let arrProduct = [];
      
      Cart.forEach(element => {
        total += element.quantity*element.price;
        let item = {
          IDProduct: element.id,
          Price: element.price,
          Quantity: element.price
        };
        arrProduct.push(item);
      });
      const body = {
        TotalPrice: total,
        IDUser: isLogin.data.ID,
        BillDetails: arrProduct
      }
      console.log(body);
      axios.post(config.urlBill, {
        body
      }).then(result => {
        console.log('result',result);
          if (result.status === 200) {
            
              
              console.log(result.data);
              localStorage.removeItem("Cartn");
             
              
              return( alert("Đặt hàng thành công") );
              
  
          } else {
            return(alert("Có lỗi"));
          }
      }).catch(e => {
         
          console.log(e);
      });
    }
  }

return (
  <div>
  <MDBContainer container className="my-5">
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Sản Phẩm</th>
            <th scope='col'>Mã Code</th>
            <th scope='col'>Số Lượng</th>
            <th scope='col'>Giá Tiền</th>
            <th scope='col'>Thành Tiền</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
    {!_.isNil(listCart) && listCart.map(reptile => (
          
           
          
               
                  <tr >
                      <td key={reptile.id}>
                        <div className='d-flex align-items-center'>
                          <img
                            src={reptile.img}
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded-circle'
                          />
                          <div className='ms-3'>
                            <p className='fw-bold mb-1'>{reptile.name}</p>
                          
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className='fw-normal mb-1'>{reptile.codeid}</p>
                        
                      </td>
                      <td>
                        <MDBBadge color='success' pill>
                        {reptile.quantity}
                        </MDBBadge>
                      </td>
                      <td>{reptile.price}</td>
                      <td>
                      <p className='fw-normal mb-1'>{reptile.price*reptile.quantity}</p>
                        
                        
                      </td>
                      <td>
                       
                        <button onClick={()=>DeleteProduct(reptile.id)} className='class="ripple ripple-surface btn btn-danger btn-rounded"'>Xóa</button>
                      </td>
                    </tr>
            
                    
                   
                  
             
        ))}
     
     </MDBTableBody>
                </MDBTable>
                <button onClick={()=> Payment()} className='ripple ripple-surface btn btn-success btn-rounded float-end '>Thanh Toán</button>
                
                </MDBContainer>
            </div>
  
);

}