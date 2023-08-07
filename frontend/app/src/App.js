import React, { useState } from 'react';
import axios from 'axios';
import {message} from 'antd';
import './App.css';

const App = () => {
    const [phoneNumber, setPhoneNumber] = useState('')

    const register =  () =>{
        axios.post('http://localhost:6123/signup',
        {phoneNumber});
        message.success('OTP Send Successfully')
    }
    return(
        <div class='container'>
            <div class = 'registerform'>
                <form onSubmit = {register}>
                    <h1>Register Form</h1>
                    <label>
                        <div className='input'>Phone Number:</div>
                    </label><br></br>
                    <input type='text' class="box" name='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <button type='button' onclick ="alert('OTP Send')"  class="signup" onClick={register}>SendOTP</button>
                </form>
            </div> <br></br>
        </div>
    )
}

export default App;