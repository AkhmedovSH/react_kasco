import React, { useState, useEffect, useRef } from 'react'
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar'

function Header() {



    return (
        <>
            <nav className="sticky navbar fixed-top navbar-expand-lg navbar-dark fade_down_effect">
                <div className="container">
                    <div className="navbar_logo">
                        <a to="/">
                            {/* <img src={Logo} alt=""/> */}
                        </a>
                    </div>
                    <button className="navbar-toggler box-shadow-none navbar-light" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Navbar.Collapse id="navbarNavAltMarkup">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                            <ul className="navbar-nav m-auto">
                                <div className="d-lg-flex align-items-center">

                                    <li className="nav-item">
                                        <a className="nav-link" to="/">홈</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" to="/market">마켓</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" to="">이벤트</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" to="">스튜디오</a>
                                    </li>
                                    <li className="nav-item">

                                    </li>

                                </div>
                            </ul>


                        </div>
                    </Navbar.Collapse>

                    {/* 
                    {isConnectedWallet ? (
                            <div className="dropdown">
                               <Link to="/my-page" className="my_page_icon">
                                    <VscAccount/>

                                </Link>
                                <div className="dropdown-content">
                                    <a href="#!" onClick={() => logout()}>Logout</a>
                                </div>
                            </div>

                    ) : (
                        <Link  to="/connect-wallet"  className="user_address">
                            <img src={WalletIcon} alt="wallet" />
                            Wallet connect
                        </Link>
                    )} */}


                </div>
            </nav>

        </>
    )
}

export default Header