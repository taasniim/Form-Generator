import React from "react";
import  StorageIcon from "@material-ui/icons/Storage";
import  ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { IconButton } from "@material-ui/core";
import "./Mainbody.css";
import doc_img from "../images/doc_img.jpg";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Mainbody(){
    return (
        <div className="main_body">
            <div className="mainbody_top">
                  <div className="mainbody_top_left" style={{fontSize:"16px",fontWeight:"500"}}>
                    Rexent forms
                 </div>
                 <div className="mainbody_top_right">
                    <div className="mainbody_top_center"style={{fontSize:"14px",fontWeight:"125px"}}>Owned by anyone <ArrowDropDownIcon/>
                    <IconButton>
                        <StorageIcon style={{fontSize:"16px",color:"black"}}/>
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style={{fontSize:"16px",color:"black"}}/>
                    </IconButton>
                    </div>

                 </div>


            </div>
            <div className="mainbody_docs">
                <div className="doc_card">
                    
                    <img  src={doc_img} className="doc_image"/>
                    <div className="dov_card_content">
                        <h5></h5>
                        <div className="doc_content" style={{fontSize:"12px",color:"grey"}}>
                            <div className="content_left">
                                <StorageIcon style={{fontSize:"12px",color:"white",backgroundColor:"rgb(74, 208, 163)",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>
                            </div>
                            <MoreVertIcon style={{fontSize:"16px",color:"grey"}}/>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
export default Mainbody