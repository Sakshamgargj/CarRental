import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function V1 (params){

    const model = params?.veh?.model;
    const rent = params?.veh?.rent;
    const mark = params?.veh?.mark;
    const year = params?.veh?.year;
    const doors = params?.veh?.doors;
    const ac = params?.veh?.ac;
    const transmission = params?.veh?.transmission;
    const fuel = params?.veh?.fuel;
    const photo = params?.veh?.photo;

    let nav = useNavigate()

    function f1(){
        if (model !== undefined) {
            console.log(model); // This will output: '320' if model is defined
        } else {
            console.log('Model is undefined');
        }    }
    return(
        <div>
            <div className="row">
                <div  className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-6 col-xs-8 p-3">
                    <img src={photo} style={{width:"100%", height:'300px '}} />
                </div>
                <div  className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-2 col-xs-2 p-3">
                    <table border='1'>
                        <tr><td colSpan='2' style={{width:'200px',height:'40px', backgroundColor:'#ef753c'}}>Rs. {rent}/- rent per Km</td></tr>
                        <tr style={{width:'200px',height:'35px'}}><td>Model</td><td>{model}</td></tr>
                        <tr style={{width:'200px',height:'35px'}}><td>Mark</td><td>{mark}</td></tr>
                        <tr style={{width:'200px',height:'35px'}}><td>Year</td><td>{year}</td></tr>
                        <tr style={{width:'200px',height:'35px'}}><td>Doors</td><td>{doors}/5</td></tr>
                        <tr style={{width:'200px',height:'35px'}}><td>AC</td><td>{ac}</td></tr>
                        <tr style={{width:'200px',height:'35px'}}><td>Transmission</td><td>{transmission}</td></tr>
                        <tr style={{width:'200px',height:'35px'}}><td>Fuel</td><td>{fuel}</td></tr>                            
                        <tr><td colSpan='2' ><input type='button' value='Reserve Now' onClick={()=>nav('/reserveVehicle')} className='rounded border-0 mt-4' style={{width:'200px',height:'40px', backgroundColor:'#ef753c', cursor:"pointer"}} /></td></tr>
                    </table>
                </div>
                <div  className="col-xxl-3 col-xl-3 col-lg-3 col-md-1 col-sm-1 col-xs-1 p-3">
                </div>
            </div>
        </div>
    )
}
