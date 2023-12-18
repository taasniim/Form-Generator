import React from "react";
import "./Template.css";
import blank from "../images/Blank.png"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import UNfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import uuid from "react-uuid";
import {Link} from 'react-router-dom'


function Template(){
    const createForm=()=>{
        const id =uuid();
        <Link to="/Formheader">Create Form</Link>
        console.log(id)
    }
    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{fontSize:"16px",color:"#202124"}}>Start New Form</span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">
                        Template gallery_button
                        <UNfoldMoreIcon fontSize="small"/>
                    </div>
                    <IconButton>
                        <MoreVertIcon fontSize="small"/>
                    </IconButton>
                </div>
            </div>
            <div className="template_body">
                <div className="card" onClick={createForm}>
                <img src={blank} alt="no image" className="card_image"/>
                <p className="card_title">Blank</p>
                
                </div>
                
            </div>

        </div>
    )
}
export default Template