
import React, { useState } from 'react';
import './nav.css';
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";


const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    
    };
    const [searchQuery,setSearchQuery]=useState('');

    const changeInput=(event)=>{
        setSearchQuery(event.target.value);
    }
    const handleSearch=(event)=>
    {
        console.log(searchQuery);
    }
    const handleKeyPress=(event)=>
    {
        if(event.key=='Enter')
        {
            handleSearch(event);
        }
    }

    return (
        <div className="hero">
        <div className="shade"></div>
            <div className="navbar">
                <div className=' logo '></div>
                <div className='findpro-dropdown'>
                    <button onClick={toggleDropdown} className="dropbtn ">Find Professionals<FaAngleDown style={{ verticalAlign: 'middle' }} /></button>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <a href="#"className='find-options'>1</a>
                            <a href="#"className='find-options'>2</a>
                            <a href="#"className='find-options'>3</a>
                        </div>
                    )}

                </div>
                <a href="#"className='community-link '>Community</a>
                
                
                    <form onSubmit={handleSearch}>
                   
                    {/* <CiSearch style={{ verticalAlign: 'middle' }}/> */}
                        <input className='search-area' type='text'
                        placeholder=' Search'
                        value={searchQuery}
                        onChange={changeInput}
                        onKeyPress={handleKeyPress}
                        />
                    

                    </form>
                    
                    <div className='user-account'>  
                    <div className="userlogo"></div>
                    <div></div>
                    <button  className="user-name ">Alex Cooper <FaCaretDown  style={{ verticalAlign: 'middle' }} /></button>
                    </div>
                
            </div>
            <div className='hero-text'>
            <span><h1>Get Matched with manufacturer</h1></span>
            <span><h3>Find the Best Leather manufacturer for Your Needs. Get Matched Quickly and Easily</h3></span>
            </div>
            

            
        </div>
    );
};

export default NavBar;



