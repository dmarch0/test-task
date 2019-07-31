import React from "react";

import { formatDate } from "../../../utils/formatDate";
import "./LetterItem.css";

const LetterItem = ({ letter }) => {
  const date = formatDate(letter.date);
  return (
    <tr className="letters-item">
      <th className="letter-item__column">{date}</th>
      <th className="letter-item__column">{letter.subject}</th>
      {letter.status === "-1" ? (
        <th className="letter-item__column_success">Отправлено</th>
      ) : letter.status < -1 ? (
        <th className="letter-item__column_fail">Ошибка</th>
      ) : (
        <th className="letter-item__column_await">В очереди</th>
      )}
    </tr>
  );
};

export default LetterItem;
