import React from 'react'

const Button = ({ children, onClick, className }: { children: React.ReactNode, onClick: () => void, className?: string }) => {
  return (
    <button onClick={
      onClick
    } className={`backdrop-blur-[60px] border border-[#ffffff33] shadow-md p-2 rounded-lg flex flex-row items-center gap-2 ${className}`}>
      {children}
    </button>
  )
}

export default Button