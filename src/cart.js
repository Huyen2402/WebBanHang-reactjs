import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBContainer } from 'mdb-react-ui-kit';

export default function Cart() {
  return (
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
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://product.hstatic.net/1000362438/product/m2_115ed4f14ce3411388cca27bdb602759_master.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Son Tint Bóng Merzy Aurora Dewy Tint #DT11</p>
              
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>8809510683367</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              6
            </MDBBadge>
          </td>
          <td>199.000</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
            199.000
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://product.hstatic.net/1000362438/product/m2_115ed4f14ce3411388cca27bdb602759_master.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Son Kem Lì Merzy Bite The Beat Mellow Tint #M2</p>
               
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>8809510682681</p>
           
          </td>
          <td>
            <MDBBadge color='primary' pill>
              2
            </MDBBadge>
          </td>
          <td>199.000</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
            199.000
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://product.hstatic.net/1000362438/product/m2_115ed4f14ce3411388cca27bdb602759_master.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>(Ver Red) Son Kem Lì Merzy The First Velvet Tint #V16</p>
               
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>8809510683206</p>
           
          </td>
          <td>
            <MDBBadge color='warning' pill>
              3
            </MDBBadge>
          </td>
          <td>199.000</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
            199.000
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    <MDBBtn className='float-end '  rounded color='success'>
        Thanh Toán
      </MDBBtn>
    </MDBContainer>
  );
}