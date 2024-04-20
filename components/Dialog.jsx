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
        <div className={`fixed inset-7 rounded-2xl text-black bg-white flex flex-col z-50
                        py-6 shadow-lg duration-200 overflow-auto ${className}`}
        >
            <div className='absolute top-4 right-4 flex w-full'>
                <div className='absolut right-4 top-4 flex justify-end gap-5 w-full select-non'>
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
            </div>

            {/* main content of dialog */}
            {children}
        </div>
    )
};

export const DialogTitle = ({ children }) => {
    return (
        <div className='flex justify-center font-bold text-base md:text-xl'>
            <p>
                {children}
            </p>
        </div>
    )
}