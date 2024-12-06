import {useEffect, useState} from 'react'
import axios from 'axios'
import V1 from './page21'
import '../App.css'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'

function Vehicle ({commonData}){

    let [brand,setBrand] = useState([{vid:1,name:"Audi A1 S-Line",rent:45,model:"Audi",mark:"A1",year:2022,doors:"4",ac:"Yes",transmission:"Manual",fuel:"Hybrid",photo:"http://res.cloudinary.com/dvyxj4egv/image/upload/v1733495304/sbsxitylxhqusm3w5n8g.jpg"}])
    let [change,setChange] = useState({})
 
    let nav = useNavigate();
    
    function f1(){
        setChange(brand[0]);
        console.log(change);
    }
    function f2(){
        setChange(brand[1]);
        console.log(change);
    }
    function f3(){
        setChange(brand[2]);
        console.log(change);
    }
    function f4(){
        setChange(brand[3]);
        console.log(change);
    }
    function f5(){
        setChange(brand[4]);
        console.log(change);
    }
    function f6(){
        setChange(brand[5]);
        console.log(change);
    }
    
    useEffect(()=>{
        f2();
        axios.get(process.env.REACT_APP_API+"vehicle").then(reply=>{
            if(reply.status == 200){
                setBrand(reply.data);
                f1();
            }
        })
    },[])

    return(
        <div className="steps-section" style={{backgroundColor:commonData.bgColorMode, color:commonData.colorMode}}>
            <br/><h4>Vehicle Models</h4>
            <h1>Our rental fleet</h1>
            <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>

            <br/>
            <div className="row">
                <div  className="col-xxl-2 col-xl-2 col-lg-2 col-md-1 col-sm-1 col-xs-1 p-3">
                </div>
                <div  className="col-xxl-2 col-xl-2 col-lg-2 col-md-1 col-sm-2 col-xs-1 p-3">
                    <div class="nav flex-column text-center ">
                        
                        
                        <input type="button" value={brand[0]?.name} onClick={f1} className='veh-button rounded border-0 p-3'/>
                        <input type="button" value={brand[1]?.name} onClick={f2} className='veh-button rounded border-0 p-3'/>
                        <input type="button" value={brand[2]?.name} onClick={f3} className='veh-button rounded border-0 p-3'/>
                        <input type="button" value={brand[3]?.name} onClick={f4} className='veh-button rounded border-0 p-3'/>
                        <input type="button" value={brand[4]?.name} onClick={f5} className='veh-button rounded border-0 p-3'/>
                        <input type="button" value={brand[5]?.name} onClick={f6} className='veh-button rounded border-0 p-3'/> 
                        <input type="button" value="And more.." onClick={()=>{ nav('/displayVehicle')}} className='veh-button rounded border-0 p-3 '  /> 
                    </div>
                </div>
                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-9 col-xs-10 p-3">
                    <V1 veh={change} />
                </div>    
            </div>
        </div>
    )
}

let connectToStore = (state)=>({commonData:state})
export default connect(connectToStore)(Vehicle)