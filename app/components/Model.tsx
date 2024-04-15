import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

type Iprop = {
    image: string
    color?: string
}
interface ChildProps {
    active: boolean;
    index: number;
};
type IData = {
    List: Iprop[]
    Model: ChildProps
}
const ImageComp: React.FC<IData> = ({ Model, List }) => {
    const { active, index } = Model

    const container = useRef(null)

    useEffect(() => {
        const movecontainerX = gsap.quickTo(container.current, "left", { duration: 0.4, ease: "power3" })
        const movecontainerY = gsap.quickTo(container.current, "top", { duration: 0.4, ease: "power3" })

        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e
            movecontainerX(clientX)
            movecontainerY(clientY)
        })

    }, [])

    const scaleAnimation = {
        initial: {
            scale: 0,
            x: "-50%",
            y: "-50%"
        },
        open: {
            scale: 1,
            x: "-50%",
            y: "-50%",
            transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
        },
        closed: {
            scale: 0,
            x: "-50%",
            y: "-50%",
            transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }

        }
    }
    return (
        <motion.div ref={container} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className='absolute hidden md:flex pointer-events-none overflow-hidden h-[300px] w-[450px] items-center justify-center'>
            <div style={{ top: index * -100 + "%", transition: "0.5s cubic-bezier(0.76, 0, 0.24, 1)" }} className={`model w-full h-full absolute`}>
                {
                    List.map((item, ind) => {
                        const { image, color } = item
                        return (
                            <div key={ind} style={{ backgroundColor: color }} className="p-6 rounded z-40 relative h-full flex items-center justify-center">
                                <Image loading='lazy' src={image} className='h-full w-full object-contain' height={2000} width={2000} alt='images'/>
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default ImageComp