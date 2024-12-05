import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'

export default function Orders () {
    let [order,setOrder] = useState([]);
    function f1(){
        axios.get("http://localhost:4000/order").then((reply)=>{
            if(reply.status === 200){
                setOrder(reply.data)
            }
        }
    )}

    // function f2(e){
        
    //     alert(e.value);
    // }

    // function f2(){
    //     let aa = document.getElementById("AO1");
    //     aa.value = "Request Approved";
    //     aa.style.backgroundColor = "blue"
    // }

    
    useEffect(()=>{
        f1();
    },[])
    return (
            <div className="row p-5">
                {order.map(e=>
                    <div  className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-8 col-xs-12 p-3">
                        <div className="card">
                            <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>{e.carType}</div>
                                <div className="card-body text-center">
                                <h6>{e.pickupLocation}</h6>
                                <h6>{e.dropoffLocation} </h6>
                                <h6>{e.pickupDate}</h6>
                                <h6>{e.dropoffDate} </h6>
                            </div>
                            <div className="card-footer text-center"><input type="button" className="btn" id="AO1" style={{backgroundColor:"green"}} value="Select Request"/></div>
                            <div className="card-footer text-center"><input type="button" className="btn" id="AO2" style={{backgroundColor:"red"}} value="Reject Request"/></div>
                        </div>
                    </div>            
                    )}
            </div>
  )
}