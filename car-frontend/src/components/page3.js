import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';

function Page3 ({commonData}){
  const [carName, setCarName] = useState([]);
  let nav = useNavigate()

  function f1 () {

    if(commonData.isLogin == 'N'){
      nav('/login')
      return
      //alert('Do Login')
    }

    let a1 = document.getElementById("P31").value;
    let a2 = document.getElementById("P32").value;
    let a3 = document.getElementById("P33").value;
    let a4 = document.getElementById("P34").value;
    let a5 = document.getElementById("P35").value;

    if((a1 && a2 && a3 && a4 && a5 ) == ""){
      alert("All field must be filled, Compulsory !! ");
      return;
    }
    if(a4>=a5){
      alert("Date must be correct !")
      return
    }
    

    let obj = {
      carType : a1,
      pickupLocation : a2,
      dropoffLocation : a3,
      pickupDate : a4,
      dropoffDate : a5
    }
    axios.post("http://localhost:4000/order",obj).then((reply)=>{
        if(reply.status === 200)
        {
          alert("Order Booked")
        }
        else{
          alert("ERROR while Booking")
        }
    })
  };

  
  useEffect(()=>{
    axios.get('http://localhost:4000/vehicle').then(reply=>{
      if(reply.status === 200){
        setCarName(reply.data);
      }
    })
  },[])

  return (
    <div className="car-booking-form">
      <h1>Book a car</h1>
      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faCar} /> Select Your Car Type <span>*</span>
        </label>
        <select id='P31'> 
          <option>Select vehicle</option>
          {carName.map(e=>
            <option>{e.name}</option>
          )}
        </select>
      </div>

      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Pick-up <span>*</span>
        </label>
        <input type='text' placeholder='city, State' id='P32' />
      </div>
        <div>
            
        </div>
      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Drop-off <span>*</span>
        </label>
        <input type='text' placeholder='city, State' id='P33' />
      </div>

      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faCalendarAlt} /> Pick-up <span>*</span>
        </label>
        <input type='date' id='P34' placeholderText="mm / dd / yyyy" />
      </div>

      <div className="form-group">
        <label>
          <FontAwesomeIcon icon={faCalendarAlt} /> Drop-off <span>*</span>
        </label>
        <input type='date' id='P35' placeholderText="mm / dd / yyyy" />
      </div>

      <input type='submit' id='P34' value="Book Here" onClick={f1} className="search-button" />
    </div>
  );
};

let connectToStore = (state)=>({commonData:state})
export default connect(connectToStore)(Page3)