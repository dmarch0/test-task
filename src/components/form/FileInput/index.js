import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { FaTimes } from "react-icons/fa";

import "./FileInput.css";
import { addFile } from "../../../actions/fileActions";
import { closeDnd } from "../../../actions/uiActions";

const FileInput = ({ addFile, isDisplayed, closeDnd, fileError }) => {
  return (
    <div
      className={cn({
        "file-input_displayed": isDisplayed,
        "file-input": !isDisplayed
      })}
      onDrop={event => {
        event.preventDefault();
        for (let file of event.dataTransfer.files) {
          addFile(file);
        }
      }}
      onDragOver={event => {
        event.preventDefault();
      }}
    >
      <h1 className="file-input__header">Бросайте файлы сюда, я ловлю</h1>
      <p className="file-input__text">
        Мы принимаем картинки (jpg, png, gif), офисные файлы(doc, xls, pdf) и
        zip-архивы.
      </p>
      <p className="file-input__text">Размеры файла до 5 МБ</p>
      <p className="file-input__error-display">{fileError}</p>
      <div className="file-input__btn-close" onClick={closeDnd}>
        <FaTimes />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isDisplayed: state.ui.isFileDndDisplayed,
  fileError: state.error.file
});

export default connect(
  mapStateToProps,
  { addFile, closeDnd }
)(FileInput);
