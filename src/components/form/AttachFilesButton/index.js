import React from "react";
import { FaPaperclip } from "react-icons/fa";
import { connect } from "react-redux";

import "./AttachFilesButton.css";
import { openDnd } from "../../../actions/uiActions";

const AttachFilesButton = ({ openDnd }) => {
  return (
    <button className="attach-files-btn" type="button" onClick={openDnd}>
      <FaPaperclip />
      Прикрепить файлы
    </button>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { openDnd }
)(AttachFilesButton);
