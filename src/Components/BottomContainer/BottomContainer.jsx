import React from "react";
import "./BottomContainer.css";

function BottomContainer(){
    return <div className="bottomContainer">
        <div className="bottomContainer__left">
            <img src="https://i.scdn.co/image/ab67706f00000002b6c7f1f3d3c3a3d3a9c0b9f9" alt=""/>

        </div>
        <div className="bottomContainer__center">
            <h2>Artist Name</h2>
            <p>Album Name</p>

        </div>
        <div className="bottomContainer__right">
            <i className="fas fa-step-backward"></i>
            <i className="fas fa-play"></i>
            <i className="fas fa-step-forward"></i>

        </div>

    </div>

}
export{BottomContainer};