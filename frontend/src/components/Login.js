import React from 'react';
import { Button } from '@material-ui/core';
import '../css/Login.css';
import { auth, provider } from '../firebase';
import { useStateValue } from '../redux/StateProvider';
import { actionTypes } from '../redux/reducer';

const Login = () => {
    const [{}, dispatch] = useStateValue();
    
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <div className="login_container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/119px-WhatsApp.svg.png" alt="" />
            <div className="login_text">
                <h1>Sign In to Whatsapp</h1>
            </div>
                <Button onClick={signIn}>Sign In with Google</Button>
        </div>
    </div>
  )
}

export default Login

