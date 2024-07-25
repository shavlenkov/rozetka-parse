import React from 'react'

const Spinner: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-[400px]">
            <div className="w-[80px] h-[80px] animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
        </div>
    )
}

export default Spinner
