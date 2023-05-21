import React, { useContext } from 'react';
import logo from '../../../images/logo.png'
import userpic from '../../../images/user.png'
import '../Header/Header.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';


const Header = () => {
    const { users, logout } = useContext(AuthContext);


    const handleLogout = () => {
        logout();

    }

    return (
        <div>
            <div className='fixed-top bg-danger bg-gradient'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-expand-md bg-body-tertiary">
                        <div className=" container-fluid">
                            <NavLink className="navbar-brand" to="/">
                                <img className='logo-image' src={logo} alt="" />
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-bold text-black" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-bold text-black" aria-current="page" to="/shop">Shop</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link fw-bold text-black" to="/about">About</NavLink>
                                    </li>

                                    {users?.email ? <h5 className='btn text-bold text-xl text-white'>{users.displayName}</h5> :
                                        <li className="nav-item sign-in">
                                            <NavLink className="nav-link fw-bold text-black" to="/signIn">Sign In</NavLink>
                                        </li>}
                                    {
                                        users?.email && <img src={users.displayName} className="img-fluid user-pic" alt="userPhoto"></img>

                                    }
                                    {
                                        users?.email ? <li className="nav-item sign-in"><button onClick={handleLogout} className='btn btn-sm text-black '>Log out</button></li> :
                                            <li className="nav-item sign-up">
                                                <NavLink className="nav-link fw-bold text-white" to="/signUp">Sign Up</NavLink>
                                            </li>



                                    }






                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>


            </div>
            {/* banner section */}

            <div className='container flex'>
                <div className="banner-content">
                    <h3>Fantastic Friday</h3>
                    <span></span>
                    <h1>Deals of the Week</h1>
                    <Link href="#">Learn More</Link>
                </div>

            </div>

        </div>



    );
};

export default Header;