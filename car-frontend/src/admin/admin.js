
import { Link } from "react-router-dom";

export default function Admin()
{
    
    return(
        <div className="row">
            <div className="col-2 p-5" style={{backgroundColor:'#aaccff'}}>
                <Link to="/">Home</Link><hr/>
                <Link to="/admin/memberData">Members</Link><hr/>
                <Link to="/admin/addCar">Add Car</Link><hr/>
                <Link to="/admin/updateCar">Update Car</Link><hr/>
                <Link to="/admin/vehicles">Vehicles</Link><hr/>
                <Link to="/admin/orders">Orders</Link><hr/>
                <Link to="/forgotPassword">Change Password</Link><hr/>
                <Link to="">Logout</Link><hr/>                
            </div>
            <div className="col-10 p-5">
                <h1>Admin Panel</h1>
            </div>
        </div>
    );
}