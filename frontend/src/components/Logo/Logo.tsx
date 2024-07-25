import React from 'react'

const Logo: React.FC = () => {
    return (
        <div className="logo flex items-center justify-center">
            <div className="logo__img mb-4 mr-3">
                <img
                    src="/images/logo.png"
                    width="100"
                    height="100"
                    alt="Rozetka"
                />
            </div>
            <div className="logo__text">
                <h1 className="text-center text-[30px]">Rozetka Parse</h1>
            </div>
        </div>
    )
}

export default Logo
