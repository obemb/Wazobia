import React, { useRef, useEffect } from "react";
import { Quill } from "react-quill";
import { selectorTypes } from "../utils/types";

function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "Inter",
  "lucida",
];
Quill.register(Font, true);

export const modules = (props) => ({
  toolbar: {
    container: "#" + props,
    handlers: {
      undo: undoChange,
      redo: redoChange,
    
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
});

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "code-block",
];

const EditorToolbar = ({ toolbarId, selectedAction }) => {
  const videoRef = useRef(null);
  const pictureRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    if (videoRef?.current && selectedAction === selectorTypes.VIDEO) {
      videoRef?.current.click();
    }

    if (pictureRef?.current && selectedAction === selectorTypes.PICTURE) {
      pictureRef?.current.click();
    }

    if (linkRef?.current && selectedAction === selectorTypes.SOCIAL) {
      linkRef?.current.click();
    }
  }, [selectedAction]);
  return (
    <>
      {toolbarId !== undefined && (
        <div id={toolbarId}>
          <span className="ql-formats">
            <select className="ql-header" defaultValue="7">
              <option value="1">Heading 1</option>
              <option value="2">Heading 2</option>
              <option value="3">Heading 3</option>
              <option value="4">Heading 4</option>
              <option value="5">Heading 5</option>
              <option value="6">Heading 6</option>
              <option value="7">Paragraph</option>
            </select>
          </span>
          <span className="ql-formats">
            <button className="ql-link"  ref={linkRef} />
            <button className="ql-image" ref={pictureRef} />
            <button className="ql-video" ref={videoRef} />
          </span>
          <span className="ql-formats">
            <select className="ql-align" />
            <button className="ql-bold" />
            <button className="ql-italic" />
          </span>
          <span className="ql-formats">
            <button className="ql-list" value="ordered" />
            <button className="ql-list" value="bullet" />
            <button className="ql-indent" value="-1" />
            <button className="ql-indent" value="+1" />
          
          </span>
         
          <span className="ql-formats">
            <button className="ql-code-block" />
            <button className="ql-clean" />
          </span>
        </div>
      )}
    </>
  );
};
export default EditorToolbar;
