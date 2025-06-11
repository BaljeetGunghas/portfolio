import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const SectionHeading = ({ children }: Props) => {
  return (
    <div
      className="
        w-fit mx-auto px-8 py-4 
        rounded-xl 
        bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
        shadow-xl 
        text-white 
        text-3xl sm:text-5xl 
        font-extrabold 
        uppercase 
        text-center 
        tracking-wider 
        relative
        before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-24 before:h-1 before:rounded-full before:bg-white before:opacity-50
        "
      style={{ perspective: '500px' }}
    >
      {children}
    </div>
  )
}

export default SectionHeading
