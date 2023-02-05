import React from "react";
import "./LeftMenu.css";
import { LikedPlaylist } from "./LikedPlaylist";
import{FaSpotify} from "react-icons/fa";
import {MdHomeFilled} from "react-icons/md"
import{BsSearch} from "react-icons/bs";
import {VscLibrary} from "react-icons/vsc";
import {CgAddR} from "react-icons/cg";
import {BiHeartSquare} from "react-icons/bi";
import {MdOutlineBookmarkBorder} from "react-icons/md"

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
                <i className="iconButtons">
                <MdHomeFilled/>
                </i>
                <h3>Home</h3>
                
            </div>
            <div className="menuIcon">
                <i className="iconButtons">
                <BsSearch/>
                </i>
                <h3>Search</h3>
            </div>
            <div className="menuIcon">
                <i className="iconButtons">
                <VscLibrary/>
                </i>
                <h3>Your Library</h3>
            </div>
        </div> 
        <div className="playlistsOptions">
            <div className="playlistsOption">
                <i>
                <CgAddR/>
                </i>
                <h3>Create Playlist</h3>
            </div>
            <div className="playlistsOption">
                <i>
                <BiHeartSquare/>
                </i>
                <h3>Liked Songs</h3>
            </div>
            <div className="playlistsOption">
                <i>
                <MdOutlineBookmarkBorder/>
                </i>
                <h3>Your Episodes</h3>
            </div>

        </div>
        {/*add line*/}
        <LikedPlaylist/>

    </div>

}
export{LeftMenu};