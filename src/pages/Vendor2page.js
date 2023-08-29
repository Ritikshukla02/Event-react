import React from 'react'

export const Vendor2page = () => {
  return (
    <div>
        <div className="w-screen flex  flex-col justify-center items-center py-[100px] gap-y-[100px] bg-slate-300">
            <h2 className="text-2xl font-semibold"> Welcome vendor</h2>
            <div className='flex gap-[80px]'>
                <button className="bg-slate-700 px-6 py-2 text-white rounded-sm">
                    Your Item
                </button>
                <button className="bg-slate-700 px-6 py-2 text-white rounded-sm">
                    Add New Item
                </button>
                <button className="bg-slate-700 px-6 py-2 text-white rounded-sm">
                   Transection
                </button>
                <button className="bg-slate-700 px-6 py-2 text-white rounded-sm">
                    LogOut
                </button>
            </div>
        </div>
    </div>
  )
}
