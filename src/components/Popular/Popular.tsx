import React from 'react'

interface ModalProps {
  children: React.ReactNode;
}

const Popular = ({ children }: ModalProps) => {
  return (
    <div className='wrap-item-popular'>
      <span className="label">Popular!</span>
      {children}
    </div>
  )
}

export default Popular
