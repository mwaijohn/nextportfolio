import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center p-4 text-gray h-12 pb-12'>
            <p className='text-base font-bold'>Made with NextJs.  &copy; {new Date().getFullYear()}.</p>
        </div>
    )
}

export default Footer