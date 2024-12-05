import axios from "axios";
import { useEffect, useState } from "react";
import p1 from '../images/progress3.gif';
import p2 from '../images/blank.jpg';
import {useNavigate} from 'react-router-dom';
import Header from "./header";
import Footer from "./footer";
function Register()
{
    let [country,setCountries]=useState([]);
    let [states,setStates]=useState([]);
    let [msg,setMsg]=useState("");
    let nav=useNavigate();
    function loadCountries()
    {
        axios.get(process.env.REACT_APP_APIURL+"countries.php").then(reply=>{
            if(reply.status==200)
            {
                setCountries(reply.data);
            }
        });
    }
    function getStates(event)
    {
        let c=event.target.value;
        if(c!="Select Country")
        {
            axios.get(process.env.REACT_APP_APIURL+"states.php?isoname="+c).then(reply=>{
                if(reply.status==200)
                {
                    setStates(reply.data);
                }
            });
        }
    }
    function checkEmail(event)
    {
        let em=event.target.value;
        if(em.length<10) return;
        document.getElementById("img1").src=p1;
        setMsg("");        
        axios.get(process.env.REACT_APP_APIURL+"checkmember.php?email="+em).then(reply=>{
            document.getElementById("img1").src=p2;
            if(reply.status==200)
            {
                if(reply.data.status=="Yes")
                {
                    setMsg("This Email Already Exists!!!");
                    event.target.value="";
                    event.target.focus();
                }                
            }
        });
    }
    function doRegister(event)
    {
        let s1=document.getElementById("Rt1").value;
        let s2=document.getElementById("Rt2").value;
        let s3=document.getElementById("Rt3").value;
        let s4=document.getElementById("Rt4").value;
        let s5=document.getElementById("Rt5").value;
        let s6=document.getElementById("Rt6").value;
        let s7=document.getElementById("Rt7").value;
        let s8=document.getElementById("Rt8").value;
        let s9=document.getElementById("Rt9").value;
        let s10=document.getElementById("Rt10").value;
        if(s1.length<10 || s1.indexOf("@")==-1 || s1.indexOf(".")==-1)
        {
            alert("Invalid Email!!");
            return;
        }
        if(s2.length<6)
        {
            alert("Min. Password length is 6!!");
            return;
        }
        if(s2!=s3)
        {
            alert("Both password must be same!!");
            return;
        }
        let obj={email:s1,upass:s2,fname:s4,lname:s5,mobile:s6,country:s7,state:s8,city:s9,pincode:s10};
        // let json=JSON.stringify(obj);
        axios.post(process.env.REACT_APP_API+"member",obj).then(reply=>{
            if(reply.status==200 && reply.data.status=="OK")
            {
                alert("Registered Successfully");
                clearAll();
                nav("/login");
            }
        });
    }
    function clearAll()
    {
        document.getElementById("Rt1").value="";
        document.getElementById("Rt2").value="";
        document.getElementById("Rt3").value="";
        document.getElementById("Rt4").value="";
        document.getElementById("Rt5").value="";
        document.getElementById("Rt6").value="";
        document.getElementById("Rt9").value="";
        document.getElementById("Rt10").value="";        
    }
    useEffect(()=>{
        loadCountries();        
    },[]);
    return(
        <div>
            {/* <Header/> */}
            <div className="row p-5">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-10">
                    <div className="card">
                        <div className="card-header text-center bg-warning">Member Registration</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" id="Rt1" onBlur={checkEmail} placeholder="Enter Login ID" className="form-control" />                            
                                <img id="img1" src={p2} style={{width:'80px'}} />
                                <label className="text-danger">{msg}</label>
                            </div>                        
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"  id="Rt2" placeholder="Enter Password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Re Password</label>
                                <input type="password"  id="Rt3" placeholder="Enter Password Again" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text"  id="Rt4" placeholder="Enter First Name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text"  id="Rt5" placeholder="Enter Last Name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Mobile</label>
                                <input type="text"  id="Rt6" placeholder="Enter Mobile No" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <select  id="Rt7" className="form-control" onChange={getStates}>
                                    <option>Select Country</option>
                                    {country.map(e=>
                                        <option value={e.isoname}>{e.cname}</option>
                                        )}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <select  id="Rt8" className="form-control">
                                    {states.map(e=><option>{e.sname}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input  id="Rt9" type="text" placeholder="Enter City" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Pin Code</label>
                                <input  id="Rt10" type="text" placeholder="Enter Pin Code" className="form-control" />
                            </div>
                            <hr/>
                            <input type="button" value="Register" onClick={doRegister} className="btn mt-1 mb-4" style={{backgroundColor:"#ef753c", width:"200px"}} />
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
            </div>
            <Footer/>
        </div>

    );
}
export default Register;