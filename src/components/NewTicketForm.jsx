import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewTicketForm(props) {
    let _names = null;
    let _location = null;
    let _issue = null;

    function handleNewTicketFormSubmission(event) {
        const { dispatch } = props;
        event.preventDefault();
        const action = {
            type: 'ADD_TICKET',
            id: v4(),
            names: _names.value,
            location: _location.value,
            issue: _issue.value,
            timeOpen: new Moment(),
            formattedWaitTime: new Moment().fromNow(true)
        };
        dispatch(action);
        _names.value = '';
        _location.value = '';
        _issue.value = '';
    }
    return (
        <div>
            <style jsx>{`
          div {
            margin-top: 100px;
            margin: 50px;
          }
        `}</style>
            <form onSubmit={handleNewTicketFormSubmission}>
                <input
                    type='text'
                    id='names'
                    placeholder='Pair Names'
                    ref={(input) => { _names = input; }} style={{ width: "200px", height: "20px", fontSize: "15px", }} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type='text'
                    id='location'
                    placeholder='Location'
                    ref={(input) => { _location = input; }} style={{ width: "150px", height: "20px", fontSize: "15px", }} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <textarea
                    id='issue'
                    placeholder='Describe your issue.'
                    ref={(textarea) => { _issue = textarea; }} style={{ width: "300px", height: "150px", fontSize: "15px", }} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type='submit'>Help!</button>
            </form>
        </div>
    );
}

export default connect()(NewTicketForm);