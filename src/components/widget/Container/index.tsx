import React from 'react'

type ContainerProps = {
    children: React.ReactNode,
    className?: string
}

const index = ({ children, className }: ContainerProps) => {
    return (
        <div className={`mx-auto w-11/12 md:w-10/12 ${className}`}>
            {children}
        </div>
    )
}

export default index