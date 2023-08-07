import React, { useState } from 'react';
import axios from 'axios';
import {message} from 'antd';
import './App.css';

const App1 = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [otp, setOtp] = useState('')

    const verify = () =>{
        axios.post('http://localhost:6123/login',
        {phoneNumber,otp});
        message.success('Login Success')

    }
    return(
        <div class="container">
            <div class="loginform">
                <form onSubmit = {verify}>
                    <h1>Login Form</h1>
                    <label>
                        <div className='input'>Phone Number:</div>
                    </label><br></br>
                    <input type='text' class="box" name='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)}/><br></br><br></br>
                    <label>
                        <div className='input'>OTP:</div>
                    </label><br></br>
                    <input type='text' class="box" name="otp" onChange={(e) => setOtp(e.target.value)}/>
                    <br></br> <br></br>
                    <button type='submit' onclick="alert('Login Success')" class="sendOtp" onClick={verify}>SendOTP</button>
                </form>
            </div> <br></br>
        </div>
    )
}

export default App1;