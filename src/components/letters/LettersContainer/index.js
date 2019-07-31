import React from "react";
import { connect } from "react-redux";

import LetterItem from "../LetterItem";
import "./LettersContainer.css";

const LettersContainer = ({ letters, loading }) => {
  const renderContent = loading ? (
    <p>Подождите, сейчас мы загрузим ваши сообщения</p>
  ) : letters.length > 0 ? (
    <table className="letters-table">
      <thead>
        <tr className="letters-header">
          <th className="letters-header__date-column">Дата</th>
          <th className="letters-header__subject-column">Тема</th>
          <th className="letters-header__status-column">Статус</th>
        </tr>
      </thead>
      <tbody>
        {letters.map((letter, index) => (
          <LetterItem letter={letter} key={index} />
        ))}
      </tbody>
    </table>
  ) : (
    <p>Сообщения еще не отправляллись</p>
  );
  return (
    <div className="letters-container">
      <h1 className="letters-container__header">Отправленные сообщения</h1>
      {renderContent}
    </div>
  );
};

const mapStateToProps = state => ({
  letters: state.letters,
  loading: state.ui.lettersLoading
});

export default connect(
  mapStateToProps,
  {}
)(LettersContainer);
