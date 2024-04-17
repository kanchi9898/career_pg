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
const Carelist: React.FC<IData> = ({ Item, index, Model }) => {
    return (
        <div onMouseEnter={() => { Model({ active: true, index: index }) }} onMouseLeave={() => { Model({ active: false, index: index }) }}>
            <div className="group flex hover:text-black border-b-2 items-center justify-between cursor-pointer py-[1vw]">
            <h2 className='hidden md:block'>0{index + 1}.</h2>
            <img src={Item.image} className='h-[10vw] w-[10vw] object-cover md:hidden' alt='images' />
            <div className='p-1 overflow-hidden relative cursor-pointer leading-12'>
              <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>{Item.name}</span>
              <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>{Item.name}</span>
            </div>
          </div>
        </div>
    )
}

export default Carelist