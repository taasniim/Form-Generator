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
    const [questions, setQuestions] = useState([
        {
            questionText: "Question",
            questionType: "radio",
            options: [
                { optionText: "option1" ,optionType:"default"},
                { optionText: "option2" ,optionType:"default"},
                { optionText: "option3" ,optionType:"default"},
                { optionText: "option4" ,optionType:"default"}
            ],
            open: false,
            required: false
        }
    ])
    function changeQuestion(text,i){
      var newQuestion = [...questions];
      newQuestion[i].questionText = text;
      setQuestions(newQuestion);
      console.log(newQuestion)
    }
    function changeOptionValue(text,i,j){
      var optionsQuestion =[...questions];
      optionsQuestion[i].options[j].optionText =text;
      setQuestions(optionsQuestion);
      console.log(optionsQuestion);
    }


    function addQuestionType(i,type){
      let qs =[...questions];
      console.log(type);
      qs[i].questionType = type;
      qs[i].options.forEach((option) => {
        option.optionType = determineOptionType(type);
      });
    
      setQuestions(qs);
     }
     function determineOptionType(questionType) {
      switch (questionType) {
        case "text":
          return "text";
        case "checkbox":
          return "checkbox";
        case "radio":
          return "radio";
        default:
          return "default";
      }
    }
     function removeOption(i,j){
      var RemoveOptionQuestion=[...questions];
      if(RemoveOptionQuestion[i].options.length >1){
        RemoveOptionQuestion[i].options.splice(j,1);
        setQuestions(RemoveOptionQuestion);
        console.log(i+"__"+j);
      }
     }
     function copyQuestion(i){
      
      let qs =[...questions];
      var newQuestion = qs[i];
      setQuestions([...questions, newQuestion]);
    
      }
      function deleteQuestion(i){
         let qs = [...questions];
        if(questions.length > 1){
          qs.splice(i, 1);
        }
        setQuestions(qs);
      }

      function requiredQuestion(i){
        var reqQuestion =[...questions];
        reqQuestion[i].required =!reqQuestion[i].required
        console.log(reqQuestion[i].required+" "+i);
        setQuestions(reqQuestion);
      }

     function addOption(i){
      var optionsQuestion= [...questions];
      if(optionsQuestion[i].options.length <5){
        optionsQuestion[i].options.push({optionText:"Option" +(optionsQuestion[i].options.length +1)})
      }else{
        console.log("Max  5 options");
      }
      setQuestions(optionsQuestion);
     }
     function addMoreQuestionField(){

      setQuestions([...questions,
      {questionText:"Question",questionType:"radio" ,options :[{optionText:"option 1" }],open: false,required:false}
      ])

     }


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
                                type={ques.optionType}
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
                             <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value,i)}} ></input>
                            <CropOriginalIcon style={{ color: "#5f6368" }} />
                             <Select className="select" style={{ color: "#5f6368", fontSize: "13px" }} value={ques.questionType} onChange={(e)=>addQuestionType(i,e.target.value)}>
                                 <MenuItem id="text" value="Text" onclick={()=>{addQuestionType(i,"text")}}>
                                     <SubjectIcon style={{ marginRight: "10px" }}  /> Paragraph
                                 </MenuItem>
                                 <MenuItem id="checkbox" value="Checkbox" onclick={()=>{addQuestionType(i,"checkbox")}}>
                                     <CheckBoxIcon style={{ marginRight: "10px", color: "#70757a" }} checked  />
                                      Checkbox
                                 </MenuItem>
                                 <MenuItem id="radio" value="Radio" onclick={()=>{addQuestionType(i,"radio")}}>
                                     <Radio style={{ marginRight: "10px", color: "#70757a" }} checked  /> Multiple Choice
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
                                     <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText} onChange={(e)=>{changeOptionValue(e.target.value,i,j)}}></input>
                                </div>
                                <CropOriginalIcon style={{color: "#5f6368"}}/>
                                <IconButton aria-label="delete" onClick={()=>{removeOption(i,j)}} >
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        ))}

                         {ques.options.length < 5? (
                           <div className="add_question_body">
                              <FormControlLabel disabled control={
                              (ques.questionType!="text") ?
                              < input type={ques.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }}
                                style={{marginLeft:"10px", marginRight:"10px"}} disabled/> :
                              <ShortTextIcon style={{marginRight:"10px"}} />
                              } label={
                              <div>
                               <input type="text" className="text_input" style={{fontSize:"13px", width:"60px"}} placeholder="Add other"></input>
                               <Button size="small" onClick={()=>{addOption(i)}}  style={{textTransform: 'none',color:"#4285f4", fontSize:"13px", fontWeight:"600"}}>Add Option</Button>
                              </div>
                              } />
                           </div>
                          ): ""}
                        <div className="add footer">
                            <div className="add_question_bottom_left">
                              <Button size="small" style={{textTransform: 'none',color:"#4285f4", fontsize:"13px", fontweight:"600"}}>
                                <FcRightUp style={{border:"2px solid #4285f4", padding:"2px", marginRight:"8px"}} /> Answer key</Button>
                            </div>
                            <div className="add_question_bottom">
                               <IconButton aria-label="Copy"  onClick={()=>{copyQuestion(i)}}>
                                 <FilterNoneIcon/>
                               </IconButton>
                              <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}}>
                                 <BsTrash />
                              </IconButton>

                               <span style={{color: "#5f6368", fontSize:"13px"}}>Required </span> <Switch name="checkedA" color="primary" onClick={()=>{requiredQuestion(i)}}  checked={questions[i].required}></Switch>
                              <IconButton>
                                 <MoreVertIcon />
                              </IconButton>
                            </div>
                         </div>

                    </AccordionDetails>
                    <div className='question_edit'>
                      <AddCircleOutlineIcon className='edit' onClick={addMoreQuestionField}/>

                    </div>

                  
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