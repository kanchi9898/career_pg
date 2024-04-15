import React from 'react'

type Iprop = {
    image: string
    name: string
}
interface ChildProps {
    active: boolean;
    index: number;
};
type IData = {
    Item: Iprop
    Model: (Model: ChildProps) => void
    index: number
}
const Skill: React.FC<IData> = ({ Item, index, Model }) => {
    return (
        <div onMouseEnter={() => { Model({ active: true, index: index }) }} onMouseLeave={() => { Model({ active: false, index: index }) }}>
            {/* <div className='text-[5vw] md:text-[3vw] group-hover:translate-x-[10px] transition duration-300 font-medium'>{Item.name}</div>
            <div className='h-[100px] w-[140px] md:hidden'>
                <Image loading='lazy' src={Item.image} className='h-full w-full object-cover' height={500} width={500} alt='images' />
            </div> */}
            <div className="group flex hover:text-white border-b-2 items-center justify-between cursor-pointer py-[1vw]">
            <h2>0{index + 1}.</h2>
            <div className='p-1 overflow-hidden relative cursor-pointer leading-12'>
              <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>{Item.name}</span>
              <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>{Item.name}</span>
            </div>
          </div>
        </div>
    )
}

export default Skill