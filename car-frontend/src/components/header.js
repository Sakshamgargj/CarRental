import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { connect } from 'react-redux';
import { setLogin } from "../action";
import profileImg from '../images/image.jpg';
import './Header.css'; 

function Header({ commonData, setLogin }) {
    let nav = useNavigate();

    // Login and register links
    function f1() {
        return (
            <>
                <div className="nav-item active animated-link">
                    <Link className="nav-link" to="/login">Login</Link>
                </div>
                <div className="nav-item active animated-link">
                    <Link className="nav-link register-link" to="/register">Register</Link>
                </div>
            </>
        );
    }

    // User profile and logout buttons
    function f2() {
        return (
            <>
                <div className="nav-item active animated-link">
                    <Link className="nav-link" to="/profile">
                        <img className="profile-img" src={profileImg} alt="Profile" />
                    </Link>
                </div>
                <div className="nav-item active animated-link">
                    <input 
                        type="button" 
                        value="Logout" 
                        className='nav-link logout-btn' 
                        onClick={doLogout} 
                    />
                </div>
            </>
        );
    }

    // Logout action
    function doLogout() {
        setLogin('N');
        nav('/login');
    }

    return (
        <div className="header-container">
            <nav className="navbar navbar-expand-lg navbar-light animated-navbar">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="logo-img" alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active animated-link">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active animated-link">
                            <Link className="nav-link" to="/displayVehicle">Vehicles</Link>
                        </li>
                        <li className="nav-item active animated-link">
                            <Link className="nav-link" to="/team">Our Team</Link>
                        </li>
                        <li className="nav-item active animated-link">
                            <Link className="nav-link" to="/contactUs">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                {commonData.isLogin === "Y" ? f2() : f1()}
            </nav>
        </div>
    );
}

let connectToStore = (state) => ({ commonData: state });
let dispatchToStore = (dispatch) => ({
    setLogin: (value) => dispatch(setLogin(value))
});
export default connect(connectToStore, dispatchToStore)(Header);