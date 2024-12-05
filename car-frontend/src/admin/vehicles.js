import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';

const Vehicles = () => {

    let [vehicle,setVehicle]=useState([]);
    let nav = useNavigate()

    function f1(vid){
        let obj = {vid};
        axios.post(process.env.REACT_APP_API+"vehicle/delete",obj).then((reply)=>{
            if(reply.status === 200){
                nav('/admin')
                alert("Vehicle Deleted :) ")
            }
        })
        
    }

    function loadProducts()
    {
        axios.get(process.env.REACT_APP_API+"vehicle").then(reply=>{
            if(reply.status==200)
            {
                    setVehicle(reply.data);
            }
        });
    }
    
    useEffect(()=>{
        loadProducts();
    },[]);
    return(                             
        <div className="row p-5">
            {vehicle.map(e=>
                <div  className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-12 p-3">
                    <div className='row vehicle-form '>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-12 p-3">
                            <div className="card">
                                <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>{e.name}</div>
                                <div className="card-body text-center">
                                    <img src={e.photo} style={{width:'100%'}} />
                                    <h6>{e.transmission}</h6>
                                    <h6>Rs. {e.rent} /- per Km</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-8 col-xs-12 p-3">
                        <div className="card">
                            <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>Details</div>
                            <div className="card-body text-center">
                                <table border='0'style={{width:'100%'}} >
                                    <tr style={{width:'200px',height:'35px'}}><td>Model</td>|<td>{e.model}</td></tr>
                                    <tr style={{width:'200px',height:'35px'}}><td>Mark</td>|<td>{e.mark}</td></tr>
                                    <tr style={{width:'200px',height:'35px'}}><td>Year</td>|<td>{e.year}</td></tr>
                                    <tr style={{width:'200px',height:'35px'}}><td>Doors</td>|<td>{e.doors}</td></tr>
                                    <tr style={{width:'200px',height:'35px'}}><td>AC</td>|<td>{e.ac}</td></tr>
                                    <tr style={{width:'200px',height:'35px'}}><td>Transmission</td>|<td>{e.transmission}</td></tr>
                                    <tr style={{width:'200px',height:'35px'}}><td>Fuel</td>|<td>{e.fuel}</td></tr>                            
                                </table>
                            </div>
                            </div>
                        </div>
                        <div><input type="button" className="btn" style={{backgroundColor:"red",color:"wheat",width:"655px"}} value="Delete Car" onClick={()=>{f1(e.vid)}}/></div>
                    </div>  
                </div>            
                )}
       
    </div>
  )
}

export default Vehicles
