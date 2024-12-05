import {connect} from "react-redux";
import { setBgColor, setColor } from "../action";
import Header from "./header";
import Footer from "./footer";

function Profile({commonData,setBgColor,setColor})
{
    function f1(){
        setBgColor('black');
        setColor('white');
        
    }
    function f2(){
        setBgColor('white');
        setColor('black');
        
    }
    function f3(){
        let aa = document.getElementById('pfid3')
        aa.innerText = "Disable"
        f1();
    }
    return(
        <div>
            <Header/>
            <div className="row p-5" style={{backgroundColor:commonData.bgColorMode, color:commonData.colorMode}}>
                <div className="col-3"></div>
                <div className="col-6">
                    <h1 className="m-1 p-5 " ><b>Profile Page</b></h1>
                    <h5>Dark Mode : <input type="button" value="Enable  /" onClick={f1} id="pfid1" style={{ borderRadius:'0px', cursor:"pointer", border:"0px"}} /><input type="button" value="Disable" onClick={f2} id="pfid1" style={{ borderRadius:'0px', cursor:"pointer", border:"0px"}} /></h5>
                    <h5>Dark Mode : <button  onClick={f3} id="pfid3" style={{ borderRadius:'0px', cursor:"pointer", borderRadius:"30px"}} >Enable</button></h5>
                    <table className="table table-bordered table-striped text-center ">
                        <tbody>
                            <tr><td>Email</td><td>{commonData.profile.email}</td></tr>
                            <tr><td>Password</td><td>XXXXXXXX</td></tr>
                            <tr><td>First Name</td><td>{commonData.profile.fname}</td></tr>
                            <tr><td>Last Name</td><td>{commonData.profile.lname}</td></tr>
                            <tr><td>Mobile</td><td>{commonData.profile.mobile}</td></tr>
                            <tr><td>Country</td><td>{commonData.profile.country}</td></tr>
                            <tr><td>State</td><td>{commonData.profile.state}</td></tr>
                            <tr><td>City</td><td>{commonData.profile.city}</td></tr>
                            <tr><td>Pin Code</td><td>{commonData.profile.pincode}</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-3"></div>
            </div>
            <Footer/>
        </div>
    );
}

let connectToStore=(state)=>({commonData:state});
let dispatchToStore = (dispatch)=>({
    setColor:(value)=>dispatch(setColor(value)),
    setBgColor:(value)=>dispatch(setBgColor(value))
})
export default connect(connectToStore,dispatchToStore)(Profile);
