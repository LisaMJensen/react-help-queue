import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Ticket(props) {

  function handleSavingSelectedTicket(ticketId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_TICKET',
      ticketId: ticketId
    };
    dispatch(action);
  }

  const ticketInformation =
    <div>
      <style jsx>{`
          div {
            background-color: #ebf0f0;
            border: 2px, grey;
            border-radius: 5px;
            box-shadow: 10px 10px 5px grey;
            margin: 20px;
          }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => { handleSavingSelectedTicket(props.ticketId); }}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);