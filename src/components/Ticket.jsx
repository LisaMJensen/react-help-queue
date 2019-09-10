import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #ebf0f0;
            border: 2px, grey;
            border-radius: 5px;
            box-shadow: 10px 10px 5px grey;
          }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};
export default Ticket;