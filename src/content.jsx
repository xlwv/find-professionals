import React, { useState } from 'react';
import './content.css';
import { FaAngleDown } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const starCount = 5;
const Content = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);

    };
    const [searchQuery, setSearchQuery] = useState('');

    const changeInput = (event) => {
        setSearchQuery(event.target.value);
    }
    const handleSearch = (event) => {
        console.log(searchQuery);
    }
    const handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            handleSearch(event);
        }
    }
    return (

        <div className='main'>
            <div className='filters'>
                <div className='button-lable'>
                    <label for="dropbtn1" className='dropbtn-lable'>Location</label>
                    <button onClick={toggleDropdown} className="dropbtn1 " style={{ textAlign: 'left', padding: '5px 20px' }}>Search city, State or Zip<FaCaretDown style={{ verticalAlign: 'middle', textAlign: 'left' }} /></button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            {/* <a href="#"className='find-options'>1</a>
                            <a href="#"className='find-options'>2</a>
                            <a href="#"className='find-options'>3</a> */}
                        </div>
                    )}
                    <label for="dropbtn2" className='dropbtn-lable'>Distance</label>
                    <button onClick={toggleDropdown} className="dropbtn2 " style={{ textAlign: 'left', padding: '5px 20px' }}>50 MI<FaCaretDown style={{ verticalAlign: 'middle', textAlign: 'left' }} /></button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            {/* <a href="#"className='find-options'>1</a>
                            <a href="#"className='find-options'>2</a>
                            <a href="#"className='find-options'>3</a> */}
                        </div>
                    )}

                </div>
                <button onClick={toggleDropdown} className="dropbtn3 ">Project Type<FaAngleDown style={{ verticalAlign: 'middle' }} /></button>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                        {/* <a href="#"className='find-options'>1</a>
                            <a href="#"className='find-options'>2</a>
                            <a href="#"className='find-options'>3</a> */}
                    </div>
                )}

                <button onClick={toggleDropdown} className="dropbtn4 ">Rating<FaAngleDown style={{ horizontalAlign: 'middle'  }} /></button>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                        {/* <a href="#"className='find-options'>1</a>
                                <a href="#"className='find-options'>2</a>
                                <a href="#"className='find-options'>3</a> */}
                    </div>
                )}


                <button onClick={toggleDropdown} className="dropbtn5 ">Experience<FaAngleDown style={{ horizontalAlign: 'middle' }} /></button>
                {isDropdownOpen && (
                    <div className="dropdown-content">
                        {/* <a href="#"className='find-options'>1</a>
                                <a href="#"className='find-options'>2</a>
                                <a href="#"className='find-options'>3</a> */}
                    </div>
                )}



            </div>




            <div className='main-page'>
                <div className='filter-applied'>
                    <button className='category' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        Manufacturer<IoMdCloseCircle style={{
                            height: '18px',
                            width: '18px',
                        }} /></button>
                    <form onSubmit={handleSearch}>

                        {/* <CiSearch style={{ verticalAlign: 'middle' }}/> */}
                        <input className='searchbyname' type='text'
                            placeholder='Search by Name or Keyword'
                            value={searchQuery}
                            onChange={changeInput}
                            onKeyPress={handleKeyPress}
                        />
                    </form>
                </div>



                <div className='profiles'>
                    <div className='profile1'>
                        <div className='picture1'>

                        </div>
                        <div className='info'>
                            <div className='name-email'>

                                <div className='profile-preview'>
                                    <div className='profile-pic'></div>
                                    <div className='name-rating'>
                                        <div className='name'>Giovanni RawHides</div>
                                        <div className='rating'>
                                            <div className='score'>{starCount}.0</div>
                                            <div className='stars'>
                                                {[...Array(starCount)].map((_, index) => (
                                                    <MdOutlineStar key={index} style={{ color: 'gold', marginRight: '2px' }} />
                                                ))}
                                            </div>
                                            <div className='reviews'>75 reviews</div>

                                        </div>
                                    </div>
                                </div>

                                <button className='message' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <HiMail style={{ height: '16px', width: '16px', alignItems: 'center' }} />Send Message </button></div>

                            <div className='location'>
                                <div className='years'><MdBusinessCenter style={{ color: '#007562', height: '15px', width: '12px',  }} />15 years in business </div>
                                <div className='address'> <FaLocationDot style={{ color: '#666666', height: '20px', width: '15px', marginRight: '8px' }} />P.O. Box 35148, Ottawa, Ontario, Canada</div>
                            </div>
                            <div className='about'>
                            We are a Chinese group of tanners in India and have been the leather manufacturing business for more than 40 years.
                             Our production capacity is over 5 million sq feet per year.
                             looking to establish relationship with buyers all over the world ...<a href="#" style={{ color: '#994B00' }}>Read More {'>'}</a>

                            </div>
                        </div>
                    </div>
                    <div className='profile2'>
                        <div className='picture2'>

                        </div>
                        <div className='info'>
                            <div className='name-email'>

                                <div className='profile-preview'>
                                    <div className='profile-pic'></div>
                                    <div className='name-rating'>
                                        <div className='name'>Giovanni RawHides</div>
                                        <div className='rating'>
                                            <div className='score'>{starCount}.0</div>
                                            <div className='stars'>
                                                {[...Array(starCount)].map((_, index) => (
                                                    <MdOutlineStar key={index} style={{ color: 'gold', marginRight: '2px' }} />
                                                ))}
                                            </div>
                                            <div className='reviews'>75 reviews</div>

                                        </div>
                                    </div>
                                </div>

                                <button className='message' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <HiMail style={{ height: '16px', width: '16px', alignItems: 'center',color: '#994B00'}} />Send Message </button></div>

                            <div className='location'>
                                <div className='years'><MdBusinessCenter style={{ color: '#007562', height: '15px', width: '12px' }} />15 years in business </div>
                                <div className='address'> <FaLocationDot style={{ color: '#666666', height: '20px', width: '15px', marginRight: '8px' }} />P.O. Box 35148, Ottawa, Ontario, Canada</div>
                            </div>
                            <div className='about'>
                            We are a Chinese group of tanners in India and have been the leather manufacturing business for more than 40 years.
                             Our production capacity is over 5 million sq feet per year.
                             looking to establish relationship with buyers all over the world ...<a href="#" style={{ color: '#994B00' }}>Read More {'>'}</a>

                            </div>
                        </div>
                    </div>
                    <div className='profile3'>
                        <div className='picture3'>

                        </div>
                        <div className='info'>
                            <div className='name-email'>

                                <div className='profile-preview'>
                                    <div className='profile-pic'></div>
                                    <div className='name-rating'>
                                        <div className='name'>Giovanni RawHides</div>
                                        <div className='rating'>
                                            <div className='score'>{starCount}.0</div>
                                            <div className='stars'>
                                                {[...Array(starCount)].map((_, index) => (
                                                    <MdOutlineStar key={index} style={{ color: 'gold', marginRight: '2px' }} />
                                                ))}
                                            </div>
                                            <div className='reviews'>75 reviews</div>

                                        </div>
                                    </div>
                                </div>

                                <button className='message' style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <HiMail style={{ height: '16px', width: '16px', alignItems: 'center' }} />Send Message </button></div>

                            <div className='location'>
                                <div className='years'><MdBusinessCenter style={{ color: '#007562', height: '15px', width: '12px' }} />15 years in business </div>
                                <div className='address'> <FaLocationDot style={{ color: '#666666', height: '20px', width: '15px', marginRight: '8px' }} />P.O. Box 35148, Ottawa, Ontario, Canada</div>
                            </div>
                            <div className='about'>
                            We are a Chinese group of tanners in India and have been the leather manufacturing business for more than 40 years.
                             Our production capacity is over 5 million sq feet per year.
                             looking to establish relationship with buyers all over the world ...<a href="#" style={{ color: '#994B00' }}>Read More  {'>'}</a>

                            </div>
                        </div>
                    </div>

                </div>
                      <div className='pre-nxt'>
                    <button className='prebtn'><MdKeyboardDoubleArrowLeft style={{ height: '30px', width: '41px', alignItems: 'center' }} />Previous</button>
                    <div className='buttons'>
                    <button className='btn'>1</button>
                    <button className='btn'>2</button>
                    <button className='btn'>3</button>
                    <button className='btn'>4</button>
                    </div>
                    <button className='nxtbtn'>Next<MdKeyboardDoubleArrowRight style={{ height: '30px', width: '41px', alignItems: 'center' }}  /></button>
                </div>
            </div>
        </div>

    );
}

export default Content;