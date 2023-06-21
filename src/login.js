import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import config from '../src/config';
import _ from 'lodash';
function Local() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    localStorage.setItem('Login', JSON.stringify(items));
    console.log('items',items);
  }, [items]);
  return items;
}
function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [isLoggedIn, setLoggedIn] = useState(false)
  
  const [isError, setIsError] = useState(false);
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
    
  };
  function PostLogin() {
    const body = {
      Email: userName,
      Password: password,
    };
    console.log(body);

    axios
      .post(config.urlLogin, {
        body,
      })
      .then((result) => {
        console.log("result", result);
        if (result.status === 200) {
          setLoggedIn(true);
          console.log(result.data);

          localStorage.setItem("Login", JSON.stringify(result.data));
          console.log(localStorage.getItem("Login"));
          window.location.href = "http://localhost:3000/";
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
        console.log(e);
      });
  }
  function AddNewUser() {
    const body = {
      FirstName: FirstName,
      LastName: LastName,
      Email: userName,
      Password: password 
    };
    console.log('body add user ', body);
    axios
      .post(config.urlAddUser, {
        body,
      })
      .then((result) => {
        console.log("result add new user", result);
        if (result.status === 200) {
          console.log(result.data);
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "http://localhost:3000/";
            }
          })
         
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
        console.log(e);
      });
    
  }
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Đăng Nhập
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Đăng Ký
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput onChange={event => setUsername(event.target.value)} wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput onChange={event => setPassword(event.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          <button onClick={PostLogin} className='class="ripple ripple-surface btn btn-primary mb-4 w-100"'>Đăng Nhập</button>
         
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput onChange={event => setFirstName(event.target.value)} wrapperClass='mb-4' label='FirstName' id='FirstName' type='text'/>
          <MDBInput onChange={event => setLastName(event.target.value)} wrapperClass='mb-4' label='LastName' id='LastName' type='text'/>

          <MDBInput onChange={event => setUsername(event.target.value)} wrapperClass='mb-4' label='Email' id='Email' type='email'/>
          <MDBInput onChange={event => setPassword(event.target.value)} wrapperClass='mb-4' label='Password' id='Password' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>
          <button onClick={AddNewUser} className='class="ripple ripple-surface btn btn-primary mb-4 w-100"'>Đăng ký</button>
        

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;