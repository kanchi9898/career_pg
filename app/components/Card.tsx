import React from 'react'

type Iprop = {
    title?: String
    para?: String
    clsname?: String
    firstcard?: boolean
    img?: String | null
    index?: number
}
const Card: React.FC<Iprop> = ({ title, para, clsname, firstcard, img, index }) => {
    return (
        <div key={index} className={`${clsname} relative overflow-hidden opacity-0 rounded p-[2vw] flex flex-col gap-[2vw] items-center justify-center`}>
            {firstcard && <div className="w-full text-[5vw] sm:text-[4vw] md:text-[2vw] lg:text-[1.5vw] z-10 text-primary  absolute top-2 p-2">0{index}.</div>}
            <img className="h-[20vw] w-[20vw] md:h-[5vw] md:w-[5vw]" src={`${img}`} alt="icons" />
            <h1 className="text-primary font-semibold">{title}</h1>
            <p className="text-center">{para}</p>
        </div>
    )
}

export default Card
