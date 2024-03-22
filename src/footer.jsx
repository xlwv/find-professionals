import React from 'react';
import './footer.css';
import { IoIosMail } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";



const Footer = () => {
    return (


        <div className='foot-box'>
            <div className='foot-content'>
                <div className='contact-info'>
                    <div className='logo-img'></div>

                    <button className='mailto'><IoIosMail style={{ height: '24px', width: '24px' }} />
                        <span>PIIoHide@company.ca</span></button>

                    <button className='call'><MdWifiCalling3 style={{ height: '24px', width: '24px', Color: ' #FFFFFF' }} />
                        <span>(021) 876 347 294</span></button>

                    <button className='loc'><FaMapLocationDot style={{ height: '50px', width: '50px', alignContent: 'top' }} />
                        <span>3891 Ranchview 765-8764 Dr. Richardson California 62639</span></button>


                </div>
                <div className='services'>
                    <span>Our Service</span>

                    <a href="#" className='link'>About Us</a>
                    <a href="#" className='link'>How It Works?</a>
                    <a href="#" className='link'>Our Features</a>
                    <a href="#" className='link'>Community</a>


                </div>
                <div className='more-links'>

                    <span>More Links</span>

                    <a href="#" className='link'>Pricing</a>
                    <a href="#" className='link'> Team</a>
                    <a href="#" className='link'>FAQ</a>



                </div>
                <div className='platforms'>
                    <span>Platform Connect</span>

                    <div className='social'>
                        <a href="#" className='link'><RiInstagramFill style={{ height: '32px', width: '32px' }} /></a>
                        <a href="#" className='link'> <FaTwitter style={{ height: '32px', width: '32px' }} /></a>
                        <a href="#" className='link'><IoLogoYoutube style={{ height: '32px', width: '32px' }} /></a>
                        <a href="#" className='link'><FaFacebook style={{ height: '32px', width: '32px' }} /></a>
                    </div>



                </div>
            </div>

                      <div className='copyright'>
                      @ Copyright PlloHide 2024. All Rights Reserved
                      </div>
        </div>



    );
}
export default Footer;