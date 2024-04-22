'use client'

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/Dialog'
import { reportsData } from '@/constants/reports'
import React, { useState } from 'react'
import Image from 'next/image'

const page = () => {

  const [showDialog, setShowDialog] = useState(false)

  return (
    <div className='wrapper bg-[#101418] h-screen'>
      <h1 className='text-4xl font-bold text-green-500 mb-10'>
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
        >
          <DialogTitle className={'mt-7 sm:mt-0'}>
            Recently Generated Reports
          </DialogTitle>

          <table className='text-sm font-medium mt-4'>
            <thead className='bg-gray-100 p-14 h-10 '>
              <tr className='text-start text-gray-600'>
                <th className='text-start pl-10'>Date</th>
                <th className='text-start'>Report Name</th>
                <th className='text-start pr-10'>Download</th>
              </tr>
            </thead>
            <tbody>
              {reportsData.map((report) => (
                <tr key={report.reportName} className="my-20">
                  <td className='flex flex-col pl-10 my-2'>
                    <p className='mb-1'>{report.date}</p>
                    <p className='text-xs text-gray-500'>{report.time}</p>
                  </td>
                  <td>{report.reportName}</td>
                  <td>
                    <a href="#">
                      <Image
                        src='/assets/icons/download-icon.png'
                        width={30}
                        height={30}
                      />
                    </a>
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