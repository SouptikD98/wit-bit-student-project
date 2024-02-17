import React from 'react'
import Image from 'next/image'


export const SidebarMenu = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="logo-name-section pb-[2rem] border-b border-slate-300">
          <div className="flex items-center justify-center gap-[0.625rem]">
            <div className="logo-container w-[60px] h-[48px] bg-[#FFBF3F] rounded-[8px] flex items-center justify-center">
            <Image
              src="/logo.svg" // Path to your image
              alt="Description of tpxhe image"
              width={35} // Desired height of the image
              height={35}
              className=""
            />
            </div>
            <div className="name-container font-passion leading-none text-[2rem] font-bold">
            School Space
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
