import React from "react";
import { FaPaperclip, FaTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";

import "./FileList.css";
import { removeFile } from "../../../actions/fileActions";

const FileListItem = ({ file, removeFile, index }) => {
  return (
    <div className="file-list__item">
      <div>
        <FaPaperclip size="24" />
      </div>
      <span>{file.name}</span>
      <button type="button" onClick={() => removeFile(index)}>
        <FaTrashAlt /> Удалить
      </button>
    </div>
  );
};

export default connect(
  null,
  { removeFile }
)(FileListItem);
