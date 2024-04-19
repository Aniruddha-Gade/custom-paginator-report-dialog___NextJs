'use client'


import React from 'react';

// Dialog Component
export const Dialog = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
};

export const DialogTrigger = ({ children, className }) => {
    return (
        <div>
            {children}
        </div>
    )
};


export const DialogContent = ({ children, className, showDialog }) => {
    // console.log('showDialog = ', showDialog)
    if (!showDialog) return null;

    return (
        <div className={`fixed inset-7 rounded-2xl text-black bg-white flex items-center justify-center ${className}`}>
            {children}
        </div>
    )
};

