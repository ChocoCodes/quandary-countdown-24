import React from 'react'
import QuandaryLogo from '@assets/QuandaryInverted.png'

const QuandaryIcon: React.FC = () => {
    return (
        <>
            <a href="#" className="absolute top-25 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center no-underline hover:scale-[1.1] hover:transition duration-500 ease-in-out">
                <img src={ QuandaryLogo } alt="Quandary Logo"></img>
                <span className="invisible bottom-[20px] text-transparent">Go to Quandary &rarr;</span>
            </a>
        </>
    )
}

export default QuandaryIcon