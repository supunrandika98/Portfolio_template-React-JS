import React from 'react';
import '../App.css';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <FaFacebook className='icon'/>
                <FaGithub className='icon'/>
                <FaInstagram className='icon'/>
                <FaSquareXTwitter className='icon'/>
            </div>
            <p> &copy;2024 Supun Randika </p>
        </div>
    )
}
