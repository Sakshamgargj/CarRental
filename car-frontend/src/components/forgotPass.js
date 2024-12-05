import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPass(){
    let nav=useNavigate();

    function doSubmit()
    {
        let a1 = document.getElementById("fp1").value;
        let a2 = document.getElementById("fp2").value;
        let a3 = document.getElementById("fp3").value;
        if(!(a2==a3)){
            alert("Password must be same !");
            return
        }

        let obj={email:a1,upass:a2};
        axios.post("http://localhost:4000/member/update?opr=U",obj).then(reply=>{
            if(reply.status==200 )
            {
                alert("Password Updated Successfully");
                
                nav("/login");
            }
            else{
                alert("Error");
            }
        });

    }
    

    return(
        <div className="row pt-5 ">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-10">
                <div className="card">
                    <div className="card-header text-center bg-primary">Forgot Password</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Email-ID</label>
                            <input type="text" id="fp1" placeholder="Enter Email ID" className="form-control" />
                            <label>New Password</label>
                            <input type="password" id="fp2" placeholder="Enter New Password" className="form-control" />
                            <label>Again New Password</label>
                            <input type="password" id="fp3" placeholder="Enter Again Password" className="form-control" />
                        </div>
                        <input type="button" value="Submit" onClick={doSubmit} className="btn btn-primary mt-3" />
                        
                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
        </div>
    )
}