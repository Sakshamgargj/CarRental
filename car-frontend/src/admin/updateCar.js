import axios from 'axios';
import React from 'react'

export default function UpdateCar() {

    function f1(){
        let a0 = document.getElementById("AC0");
        let a1 = document.getElementById("AC1");
        let a2 = document.getElementById("AC2");
        let a3 = document.getElementById("AC3");
        let a4 = document.getElementById("AC4");
        let a5 = document.getElementById("AC5");
        let a6 = document.getElementById("AC6");
        let a7 = document.getElementById("AC7");
        let a8 = document.getElementById("AC8");
        let a9 = document.getElementById("AC9");
        let a10 = document.getElementById("AC10");
        let obj = {vid:a0.value,name:a1.value,rent:a2.value,model:a3.value,mark:a4.value,year:a5.value,doors:a6.value,ac:a7.value,transmission:a8.value,fuel:a9.value,photo:a10.value}
        console.log(obj.vid+" , " +obj.name)
        axios.post("http://localhost:4000/vehicle/update?opr=U",obj).then((reply)=>{
            if(reply.status === 200)
                {
                    alert("Added Successfully")
                }
        })
    }
  return (
    <div>
      <div className="row pt-5 ">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-10">
                <div className="card">
                    <div className="card-header text-center bg-warning">Update Car</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Car Vid</label>
                            <input type="number" id="AC0" placeholder="Enter Car Vid" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Car Name</label>
                            <input type="text" id="AC1" placeholder="Enter Car Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Rent Price</label>
                            <input type="number" id="AC2" placeholder="Enter rent" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Model</label>
                            <input type="text" id="AC3" placeholder="Enter Model" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Mark</label>
                            <input type="text" id="AC4" placeholder="Enter Mark" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Year</label>
                            <input type="number" id="AC5" placeholder="Enter Year" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Doors</label>
                            <input type="number" id="AC6" placeholder="Enter Doors" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>AC</label>
                            <select id='AC7'>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Transmission</label>
                            <input type="text" id="AC8" placeholder="Enter Trasmission" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Fuel-Type</label>
                            <input type="text" id="AC9" placeholder="Enter Fuel-type" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Photo</label>
                            <input type="text" id="AC10" placeholder="Enter Photo" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Update Car" className="form-control bg-warning" onClick={f1} />
                        </div>

                        
                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-2 col-sm-1"></div>
        </div>
    </div>
  )
}


