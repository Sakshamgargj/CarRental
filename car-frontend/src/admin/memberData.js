import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MemberData()
{
    let [members,setMembers]=useState([]);
    let [mydata,setMydata]=useState([]);
    let [page,setPage]=useState(0);
    function changePage(p)
    {
        setPage(parseInt(page)+parseInt(p));
        showPage();
    }
    function showPage()
    {
        setMydata(members.slice(parseInt(page),parseInt(page)+10));
    }
    function loadData()
    {
        axios.get(process.env.REACT_APP_API+"member").then(reply=>{
            setMembers(reply.data);
            showPage();
        });
    }
    useEffect(()=>{
        loadData();        
    },[]);
    return(
        <div className="row">
            <div className="col-12 p-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Pin Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mydata.map(e=>
                            <tr>
                                <td>{e.email}</td>
                                <td>{e.upass}</td>
                                <td>{e.fname}</td>
                                <td>{e.lname}</td>
                                <td>{e.mobile}</td>
                                <td>{e.country}</td>
                                <td>{e.state}</td>
                                <td>{e.city}</td>
                                <td>{e.pincode}</td>
                            </tr>
                            )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td style={{textAlign:'center'}} colSpan="9">
                                <input type="button" style={{width:'150px'}} className="btn btn-link" value="Previous" onClick={()=>{changePage(-10);}} /> 
                                <input type="button" style={{width:'150px'}} className="btn btn-link" value="Next" onClick={()=>{changePage(10);}} />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}