'use client'

import { Dialog, DialogContent, DialogTrigger } from '@/components/Dialog'
import React, { useState } from 'react'

const page = () => {

  const [showDialog, setShowDialog] = useState(false)

  return (
    <div className='wrapper bg-[#101418] h-screen'>
      <h1 className='text-4xl font-bold text-green-500 '>
        Check All Reports
      </h1>


      <Dialog>
        <DialogTrigger>
          <button
            onClick={() => setShowDialog(prev => !prev)}
            className='text-lg font-semibold bg-green-950 hover:bg-green-700/35 duration-200 text-green-400 py-2 px-4 rounded-xl '>
            Open Reports
          </button>
        </DialogTrigger>


        <DialogContent
          showDialog={showDialog}
          setShowDialog={setShowDialog}
          className={''}
          dialogTitle={'Reently Generated Reports'}
        >
          This is content of dialog

        </DialogContent>

      </Dialog>



    </div>
  )
}

export default page