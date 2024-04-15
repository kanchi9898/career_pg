import React from 'react'


type Iprop = {
    title1: String
    title2: String
    title3?: String
}
const Headingpart: React.FC<Iprop> = ({ title1, title2, title3 }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start gap-2">
            <h2 className="text-red text-[1.5vw]">{title1}</h2>
            <h1 className="text-primary text-[2.5vw]">{title2}</h1>
            {
                title3 ?
                    <p>
                        {title3}
                    </p>
                    : null
            }
        </div>
    )
}

export default Headingpart
