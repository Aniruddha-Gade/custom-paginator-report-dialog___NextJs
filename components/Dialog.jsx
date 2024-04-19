import React from 'react';

// Dialog Component
export const Dialog = ({ children, isOpen, onClose, title, description, actions }) => {
    return(
        <div>
            {children}
        </div>
    )
};
