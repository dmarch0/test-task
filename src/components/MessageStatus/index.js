import React from "react";
import { connect } from "react-redux";
import { FaRedoAlt } from "react-icons/fa";

import "./MessageStatus.css";

const MessageStatus = ({ email }) => {
  return (
    <div className="message-status">
      <h1>Сообщение поставлено в очередь на отправку</h1>
      <p>
        Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону
        почты получателя «{email}» со скоростью электронов.
      </p>
      <button
        className="message-status__btn-reload"
        onClick={() => window.location.reload()}
      >
        <FaRedoAlt />
      </button>
    </div>
  );
};

const mapStateToProps = state => ({ email: state.ui.email });

export default connect(
  mapStateToProps,
  {}
)(MessageStatus);
