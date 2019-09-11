import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';

function Admin(props) {
    return (
        <div>
            <h2>Admin</h2>
            <TicketList ticketlist={props.ticketList}
                currentRouterPath={props.currentRouterPath} />
        </div>
    );
}

Admin.PropTypes = {
    ticketList: PropTypes.array,
    currentRouterPath: PropTypes.string.isRequired
};

export default Admin;