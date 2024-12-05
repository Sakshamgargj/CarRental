import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHeadset, faRoad } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; 
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';

function Page4 ({commonData}) {
  let nav = useNavigate();
  return (
    <div className="steps-section" style={{backgroundColor:commonData.bgColorMode, color:commonData.colorMode}}>
      <h2>Plan your trip now</h2>
      <h1>Quick & easy car rental</h1>
      <div className="steps-container row">
        <div className="step col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3">
          <FontAwesomeIcon icon={faCar} className="step-icon" />
          <h3 style={{cursor:'pointer'}} onClick={()=>{nav('/displayVehicle')}}>Select Car</h3>
          <p>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        </div>
        <div className="step col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3">
          <FontAwesomeIcon icon={faHeadset} className="step-icon" />
          <h3 style={{cursor:'pointer'}} onClick={()=>{nav('/team')}}>Contact Operator</h3>
          <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns.</p>
        </div>
        <div className="step" col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3>
          <FontAwesomeIcon icon={faRoad} className="step-icon" />
          <h3 style={{cursor:'pointer'}} onClick={()=>{nav('/reserveVehicle')}}>Let's Drive</h3>
          <p>Whether you're hitting the open road, we've got you covered with our wide range of cars.</p>
        </div>
      </div>
    </div>
  );
};

let connectToStore = (state)=>({commonData:state})
export default connect(connectToStore)(Page4)