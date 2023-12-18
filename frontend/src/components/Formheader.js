 import React from "react";
 
 import { IconButton } from "@material-ui/core";
 
import form_image from "../images/doc_img.jpg"
 import ColorLensIcon from "@material-ui/icons/ColorLens";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import "./Formheader.css";

 function Formheader(){
    return(
        <div className="form_header">
            <div className="form_header_left">
                <img src={form_image} style={{height:"45px",width:"40px"}}/>
                <input type="text" placeholder="Untitled form" className="form_name" ></input>

            </div>
            <div className="form_header_right">
                <IconButton>
                    <ColorLensIcon size="small" className="form_header_icon"/>
                </IconButton>
                <Button variant="contained" color="primary" href="#contained-buttons">Send</Button>
                <IconButton>
                    <MoreVertIcon className="form_header_icon"/>
                </IconButton>
                <IconButton>
                    <Avatar style={{height:"30px", width:"30px"}} />
                </IconButton>

            </div>
            
        </div>
    )
 }
 export default Formheader