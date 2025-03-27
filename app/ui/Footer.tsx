import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center items-center p-4 text-gray-700 h-12 pb-12' aria-label="Footer">
            <p className='text-base font-bold text-center'>
                Made with Next.js &copy; {new Date().getFullYear()}.
            </p>
        </footer>
    )
}

export default Footer
