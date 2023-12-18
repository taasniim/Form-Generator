import React  from 'react';
import { useState,useEffect } from "react";

import "./Question_form.css";
import  CropOriginalIcon from "@material-ui/icons/CropOriginal";
import Select from '@material-ui/core/Select';
import Switch from "@material-ui/core/Switch";
import  CheckBoxIcon from "@material-ui/icons/CheckBox";
import ShortTextIcon  from "@material-ui/icons/ShortText";
import SubjectIcon  from "@material-ui/icons/Subject";
import MoreVertIcon  from "@material-ui/icons/MoreVert";
import {BsTrash} from 'react-icons/bs';
import { IconButton } from "@material-ui/core";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import AddCircleOutlineIcon  from "@material-ui/icons/AddCircleOutline";
import  OndemandVideoIcon  from "@material-ui/icons/OndemandVideo";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Button from "@material-ui/core/Button";
import  CloseIcon  from "@material-ui/icons/Close";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { BsFiletext } from "react-icons/bs";
import {FcRightUp } from 'react-icons/fc';
import { QuestionAnswerSharp } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';



function Question_form() {
    const [questions, setQuestion] = useState([
        {
            questionText: "Which is the capital city of Karnataka?",
            questionType: "radio",
            options: [
                { optionText: "Bengaluru" },
                { optionText: "Belgavi" },
                { optionText: "Hubli" },
                { optionText: "Mandya" }
            ],
            open: true,
            required: false
        }
    ]);

    function questionUI() {
        return questions.map((ques, i) => (
          <div key={i}>
            <Accordion expanded={ques.open} className={ques.open ? 'add_border' : ''}>
              <AccordionSummary
                aria-controls="panella-content"
                id="panella-header"
                elevation={1}
                style={{ width: '100%' }}
              >
                {ques.open ? (
                  <div className="saved_questions">
                    <Typography
                      style={{
                        fontSize: '15px',
                        fontWeight: '400',
                        letterSpacing: '1px',
                        lineHeight: '24px',
                        paddingBottom: '8px',
                      }}
                    >
                      {i + 1}. {ques.questionText}
                    </Typography>
                    {ques.options.map((op, j) => (
                      <div key={j}>
                        <div style={{ display: 'flex' }}>
                          <FormControlLabel
                            style={{ marginLeft: '5px', marginBottom: '5px' }}
                            disabled
                            control={
                              <input
                                type={ques.questionType}
                                color="primary"
                                style={{ marginRight: '3px' }}
                                required={ques.required}
                              />
                            }
                            label={
                              <Typography
                                style={{
                                  fontFamily: 'Roboto, Arial, sans-serif',
                                  fontSize: '13px',
                                  fontWeight: '400',
                                  letterSpacing: '2px',
                                  lineHeight: '20px',
                                  color: '#202124',
                                }}
                              >
                                {ques.options[j].optionText}
                              </Typography>
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="question_boxes">
                    <AccordionDetails className="add_question">
                         <div className="add_question_top">
                             <input type="text" className="question" placeholder="Question" value={ques.questionText} />
                            <CropOriginalIcon style={{ color: "#5f6368" }} />
                             <Select className="select" style={{ color: "#5f6368", fontSize: "13px" }}>
                                 <MenuItem id="text" value="Text">
                                     <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph
                                 </MenuItem>
                                 <MenuItem id="checkbox" value="Checkbox">
                                     <CheckBoxIcon style={{ marginRight: "10px", color: "#70757a" }} checked />
                                      Checkbox
                                 </MenuItem>
                                 <MenuItem id="radio" value="Radio">
                                     <Radio style={{ marginRight: "10px", color: "#70757a" }} checked /> Multiple Choice
                                 </MenuItem>
                            </Select>
                        </div>
                        {ques.options.map((op, j)=>( 
                            <div className="add_question_body" key={j}>
                                 {
                                     (ques.questionType!= "text") ?
                                     <input type={ques.questionType} style={{marginRight:"10px"}}/> :
                                     <ShortTextIcon style={{marginRight:"10px"}} />
                                 }  
                                <div>
                                     <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText}></input>
                                </div>
                                <CropOriginalIcon style={{color: "#5f6368"}}/>
                                <IconButton aria-label="delete" >
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        ))}


                    </AccordionDetails>
                </div>
              </AccordionSummary>
            </Accordion>
          </div>
        ));
     }
    return (
        <div>
            <div className='question_form'>
                <br></br>
                <div className='section'>
                    <div className='question_title_section'>
                        <div className='question_form_top'>
                            <input type='text' className='question_form_top_name' style={{ color: "black" }} placeholder='Untitled document'></input>
                            <input type='text' className='question_form_top_desc' placeholder="Form Description"></input>
                        </div>
                    </div>
                    {questionUI()}
                </div>
            </div>
        </div>
    );
}


export default Question_form