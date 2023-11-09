import React from 'react';
import Logo from "../../assets/casmm_logo.png";
import NavBar from "../../components/NavBar/NavBar";
import './Join.less';
import JoinBox from "./JoinBox";

const Join = () => (
    <div className='container nav-padding'>
        <NavBar />
        <div id='join-wrapper'>
            <img src={Logo} id='casmm-logo' alt='logo'/>
            <JoinBox />
        </div>
    </div>
)

export default Join;