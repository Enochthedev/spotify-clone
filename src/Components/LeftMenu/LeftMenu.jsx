import React from "react";
import "./LeftMenu.css";
import{FaSpotify} from "react-icons/fa";
import {MdHomeFilled} from "react-icons/md"
import{BsSearch} from "react-icons/bs";

function LeftMenu(){
    return <div className="leftMenu">
        <div className="logoContainer">
            <i>
            <FaSpotify/>
            </i>
            <h2> Spotify </h2><span>&reg;</span>

        </div>
        <div className="menuIcons">
            <div className="menuIcon">
                <i>
                <MdHomeFilled/>
                </i>
                <h3>Home</h3>
            </div>
            <div className="menuIcon">
                <i>
                <BsSearch/>
                </i>
                <h3>Search</h3>
            </div>


        </div> 
    </div>

}
export{LeftMenu};