'use client'


import React from 'react';
import Image from 'next/image';

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


export const DialogContent = ({ children, className, showDialog, setShowDialog }) => {
    // console.log('showDialog = ', showDialog)
    if (!showDialog) return null;

    return (
        <div className={`fixed inset-7 rounded-2xl text-black bg-white flex items-center justify-center z-50
                        p-6 shadow-lg duration-200 ${className}`}
        >
            <div className='absolute right-4 top-4 flex justify-end gap-5 w-full select-none'>
                {/* filter icon */}
                <button className=''>
                    <Image
                        src='/assets/icons/filter-icon.png'
                        alt='cancel-icon'
                        width={35}
                        height={35}
                    />
                </button>
                {/* cancel icon */}
                <button
                    onClick={() => setShowDialog(false)}
                >
                    <Image
                        src='/assets/icons/cancel-icon.png'
                        alt='cancel-icon'
                        width={35}
                        height={35}
                    />
                </button>
            </div>

            {/* main content of dialog */}
            {children}
        </div>
    )
};

