import React from 'react';
import { useNavigate } from 'react-router';
import img2 from '../images/img2.png';
import '../App.css';
import { connect } from 'react-redux';

function Page1({ commonData }) {
  let nav = useNavigate();

  return (
    <div 
      className="container-fluid p-5" 
      style={{
        backgroundColor: commonData.bgColorMode, 
        color: commonData.colorMode 
      }}
    >
      <div className="row justify-content-center align-items-center">
        {/* Spacer column for larger screens */}
        <div className="col-lg-2 d-none d-lg-block p-1"></div>

        {/* Text section */}
        <div className="col-12 col-md-8 col-lg-4 p-5 mt-5  text-lg-start">
          <h5 className="fw-bold">Plan your trip now</h5>
          <h1>
            Save <span style={{ color: 'orange' }}>big</span> with our
          </h1>
          <h1>Car Rental</h1>
          <p className="mt-3 mb-1">Book a car of your dreams. Unbeatable prices, unlimited miles.</p>
          <p>Flexible pick-up options and much more.</p>
          <button 
            onClick={() => nav('/reserveVehicle')}
            className="book-ride rounded mt-3"
            style={{ border: '0', height: '45px', width: '130px' }}
          >
            Book Ride
          </button>
        </div>

        {/* Image section */}
        <div className="col-12 col-md-6 col-lg-6 p-3 d-flex justify-content-center">
          <img 
            src={img2} 
            alt="Car Rental" 
            className="img-fluid img-transition" 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ commonData: state });
export default connect(mapStateToProps)(Page1);


// import React from 'react';
// import { useNavigate } from 'react-router';
// import img2 from '../images/img2.png';
// import '../App.css';
// import {connect} from 'react-redux'

// function Page1({commonData}) {
//   let nav = useNavigate();

//   return (
//     <div className="row p-5" style={{backgroundColor:commonData.bgColorMode, color:commonData.colorMode}}>
//       <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-1 col-xs-1 p-3">
//       </div>
//       <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-sm-11 col-xs-11 p-5 mt-5 ">
//         <br/>
//         <h5 className='fw-bold'>Plan your trip now</h5>
//         <h1>Save <span style={{color:'orange'}}>big</span> with our</h1>
//         <h1>Car Rental</h1>
//         <p className='mt-3 mb-0'>Book a car of your dreams. Unbeatable prices, unlimited miles.</p>
//         <p className='mt-0'>Flexible pick-up options and much more.</p>
//         <input type='button' value='Book Ride' onClick={() => { nav('/reserveVehicle') }} className='book-ride rounded mt-3' style={{ border: '0', height: '45px', width: '130px' }} />
//       </div>     
//       <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3">
//         <img src={img2} className="img-transition" style={{ width: '100%' }} />
//       </div>
//     </div>
//   );
// }

// let connectToStore = (state)=>({commonData:state})
// export default connect(connectToStore)(Page1);