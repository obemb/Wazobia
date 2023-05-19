import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditorToolbar, { modules, formats } from "../components/EditorToolbar";

import "react-quill/dist/quill.snow.css";
import "../styles/TextEditor.css";

import EmbedSelector from "../components/EmbedSelector";
import { Button } from "@mui/material";

const TextEditor = () => {
  const [showSelector, setShowSelector] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [showTexteditor, setShowTexteditor] = useState(false);

  const [blog, setblog] = useState({
    title: "",
    description: "",
  });
  const onChangeValue = (e) => {
    setblog({
      ...blog,
      [e.target.name]: e.target.value,
    });
    setShowTexteditor(true)
  };
  const ondescription = (value) => {
    setblog({ ...blog, description: value });
  };

  const handleSelect = (action) => {
    setSelectedAction(action);
  };
  const hideSelector = () => {
    if (showSelector) setShowSelector(false);
  };

  const submit =()=>{
    console.log(blog)
  }
  return (
    <div>
    <div className="background2">
    <div className="container" onClick={hideSelector}>
      <div className="editor-title">
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={onChangeValue}
          className="add-title"
          placeholder="Add post title"
          required
        />
      </div>
      {showTexteditor 
      ?
      <div className="editor-wrapper">
        <EditorToolbar toolbarId={"t1"} selectedAction={selectedAction} />
        <ReactQuill
          theme="snow"
          value={blog.description}
          onChange={ondescription}
          modules={modules("t1")}
          formats={formats}
          bounds={'#quill-container'}
        />

        <Fab  onClick={() => setShowSelector((selector) => !selector)}
        sx={{ backgroundColor: '#E7F1E9',margin:'40px 10px 10px 10px' }} aria-label="add" size="small">
          <AddIcon />
        </Fab>

        <div style={{ position: "relative", zIndex: "1" }}>
          {showSelector && <EmbedSelector handleSelect={handleSelect} />}
        </div>
      </div>
      :
      <div>
        <div onClick={()=>setShowTexteditor(true)}
        style={{color:'#CCCFCD', padding:'20px 100px 300px 10px',cursor:'pointer'}}>Add content</div>
      </div>}
    </div>
    </div>
      <div className="bottom">
        <span style={{fontSize:'12px'}}>
          {blog.description.replace(/<[^>]+>/g, '').length+"/1000 words"}
        </span>
      </div>
      <div style={{display: "flex",justifyContent: "flex-end", marginTop:"20px"}}>
         <Button onClick={()=>submit()}
         variant="contained" sx={{background:'#0A7227'}} >Post</Button>
      </div>
    </div>
  );
};
export default TextEditor;
