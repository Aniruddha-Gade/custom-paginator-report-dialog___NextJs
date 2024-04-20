'use client'

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/Dialog'
import { reportsData } from '@/constants/reports'
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
        // dialogTitle={'Recently Generated Reports'}
        >
          <DialogTitle>
            Recently Generated Reports
          </DialogTitle>

          <table className='text-sm font-medium'>
            <thead className='bg-slate-200 py-14 h-10'>
              <tr>
                <th>Date</th>
                <th>Report Name</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {reportsData.map((report) => (
                <tr key={report.reportName}>
                  <td className='flex flex-col'>
                    <p className='text'>{report.date}</p>
                    <p className='text'>{report.time}</p>
                  </td>
                  <td>{report.reportName}</td>
                  <td>
                    <a href="#">Download</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </DialogContent>

      </Dialog>



    </div>
  )
}

export default page