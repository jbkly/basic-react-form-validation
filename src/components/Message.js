import React from 'react';

const Message = ({ isValid }) => {
    return (
        <div>
            <h3 className="text-center message">
              Form is { isValid ? 'Complete' : 'Incomplete' }!
            </h3>
        </div>
    )
}

export default Message;
