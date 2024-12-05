import axios from "axios";
import { connect } from "react-redux";
import { setLogin, setProfile } from "../action";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";

function Login({commonData,setLogin,setProfile})
{
    let nav=useNavigate();
    let [ck,addCk]=useCookies("ESHOP");
    function doLogin(event)
    {
        let s1=document.getElementById("Lt1").value;
        let s2=document.getElementById("Lt2").value;    
        
        axios.get(process.env.REACT_APP_API+"member/"+"login?email="+s1+"&upass="+s2).then(reply=>{
            if(reply.status==200)
            {
                if(reply.data.status==undefined)
                {
                    if(document.getElementById("c1").checked)
                    {
                        let d=new Date();
                        d.setDate(d.getDate()+7);
                        addCk("UNAME",s1,{expires:d});
                    }
                    setLogin("Y");
                    setProfile(reply.data);
                    document.getElementById("Lt1").value="";
                    document.getElementById("Lt2").value="";
                    nav("/");
                }
                else
                {
                    alert("Invalid Login/Password!!!");
                    document.getElementById("Lt2").focus();
                }
            }
        });
    }
    useEffect(()=>{
        document.getElementById("Lt1").value=ck.UNAME==undefined?"":ck.UNAME;
    },[])
    return(
        <div >
            {/* <Header/> */}
            <div className="row pt-5 ">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-10">
                <div className="card">
                    <div className="card-header text-center bg-warning">User Authentication</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Login</label>
                            <input type="text" id="Lt1" placeholder="Enter Login ID" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" id="Lt2" placeholder="Enter Password" className="form-control" />
                        </div>
                        <input type="checkbox" id="c1" /> Remember Me
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/forgotpassword'>Forgot Password</Link><br/>
                        <input type="button" value="Login" onClick={doLogin} className="btn m-4 " style={{backgroundColor:"#ef753c", width:"200px"}} />
                        <br/>
                        <hr/>
                        <p>Demo Account E-mail : aaaa@male.in <br/> Demo Account Password : 11</p>
                        
                    </div>
                </div>
                <br/>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
            </div>
            <Footer/>
        </div>
    );
}
let connectToStore=(state)=>({commonData:state});
let dispatchToStore=(dispatch)=>(
    {
        setLogin:(value)=>dispatch(setLogin(value)),
        setProfile:(value)=>dispatch(setProfile(value)),
    }
    );
export default connect(connectToStore,dispatchToStore)(Login);