import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import { connect } from 'react-redux';
import { setLogin } from "../action";
import profileImg from '../images/image.jpg'

function Header ({commonData,setLogin}){
    let nav = useNavigate();
    function f1()
    {
        return(
            <>
                <div className="nav-item active" >
                    <Link className="nav-link" to="/login">Login</Link>
                </div>
                <div className="nav-item active">
                    <Link className="nav-link"  style={{backgroundColor:"orange"}} to="/register">Register</Link>
                </div>
            </>
        );
    }
    function f2()
    {
        return(
            <>
                <div className="nav-item active">
                    <Link className="nav-link" to="/profile"><img style={{width:"50px", height:"50px", borderRadius:"50px"}} src={profileImg}/></Link>
                </div>
                <div className="nav-item active" style={{backgroundColor:"orange"}}>
                    <input type='button' value="Logout" className='nav-link' style={{backgroundColor:"orange", border:'0px', cursor:"pointer"}}   onClick={doLogout}/>
                </div>
            </>
        );
    }

    function doLogout(){
        setLogin('N');
        nav('/login')
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#ddd5d0"}}>
            <Link className="navbar-brand" to="/"><img src={logo} style={{width:'50px', borderRadius:"50px"}} /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/displayVehicle">Vehicles</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/team">Our Team</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/contactUs">Contact Us</Link>
                </li>
                </ul>
            </div> 
            
            {commonData.isLogin=="Y"?f2():f1()}
            </nav>
        </div>
    )
}

let connectToStore = (state)=>({commonData:state})
let dispatchToStore = (dispatch)=>({
    setLogin:(value)=>dispatch(setLogin(value))
})
export default connect(connectToStore,dispatchToStore)(Header)