import React from 'react'


type Iprop = {
    title1: String
    title2?: String
    title2sp?: String
    title3?: String
}
const Headingpart: React.FC<Iprop> = ({ title1, title2, title3, title2sp }) => {
    return (
        <div className="w-full h-max flex flex-col items-center justify-start gap-2">
            <h2 className="text-red text-[1.5vw] font-medium">{title1}</h2>
            {
                title2?
                <h1 className="text-primary text-[5vw] font-semibold">{title2}</h1>: null
            }
            {
                title2sp?
                <h1 className="text-primary text-[5vw] font-semibold">{title2sp}</h1>: null
            }
            {
                title3 ?
                    <p className='text-[1.2vw]'>
                        {title3}
                    </p>
                    : null
            }
        </div>
    )
}

export default Headingpart
