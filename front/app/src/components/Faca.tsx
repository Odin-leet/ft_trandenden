import React from 'react'
import { useState} from 'react'
import axiosApi from '../api/axiosApi';
import axios from 'axios'
import './faca.css'

interface props{
  closemodel : React.Dispatch<React.SetStateAction<boolean>>
  openmodel1 : React.Dispatch<React.SetStateAction<boolean>>;
}


const Faca = ({closemodel,openmodel1}:props) => {
  const [qrcode, setGrcode] = useState("")
  const [img, setimg] = useState()
  const handlemodel1 = () =>{
    closemodel(false)
    openmodel1(true)
  }
  
  return (
    <div className='faBackground'>
        <div className='facontainer'>
            
        <h1 className='title'>scan the Qr code to recieve the code to enable 2FA
          </h1>
          <img className='settingsimg' src={"http://localhost:3001/2fa/generate"}/>
          <div className='footer'>
          
          <button className='cancelButton' onClick={() => closemodel(false)}>Cancel </button>
          <button className='continueButton' onClick={handlemodel1}>Continue </button>
          </div>
        </div>

    </div>
  )
}

export default Faca
