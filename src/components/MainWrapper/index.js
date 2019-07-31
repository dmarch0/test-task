import React from "react";
import { connect } from "react-redux";

import LettersContainer from "../letters/LettersContainer";
import FileInput from "../form/FileInput";
import MessageStatus from "../MessageStatus";
import FormContainer from "../form/FormContainer";
import "./MainWrapper.css";

const MainWrapper = ({ isLetterSend }) => {
  return (
    <div>
      {isLetterSend ? (
        <div className="main-wrapper">
          <MessageStatus />
        </div>
      ) : (
        <div className="main-wrapper">
          <FormContainer />
          <FileInput />
        </div>
      )}
      <LettersContainer />
    </div>
  );
};

const mapStateToProps = state => ({ isLetterSend: state.ui.isLetterSend });

export default connect(
  mapStateToProps,
  {}
)(MainWrapper);
