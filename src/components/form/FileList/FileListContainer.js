import React from "react";
import { connect } from "react-redux";

import FileListItem from "./FileListItem";
import "./FileList.css";

const FileListContainer = ({ files }) => {
  return (
    <div className="file-list">
      {files.map((file, index) => (
        <FileListItem file={file} key={index} index={index} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({ files: state.files });

export default connect(
  mapStateToProps,
  {}
)(FileListContainer);
