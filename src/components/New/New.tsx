import React from "react"

interface ModalProps {
  children: React.ReactNode;
}

const New = ({ children }: ModalProps) => {
  return (
    <div className="wrap-item-new">
      <span className="label">New!</span>
      {children}
    </div>
  )
}

export default New
