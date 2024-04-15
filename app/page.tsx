"use client"
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Lenis from '@studio-freight/lenis';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect, useState } from "react";
import Headingpart from "./components/Headingpart";
import Skill from "./components/list";
import ImageComp from "./components/Model";



const List = [
  {
    name: "Performance Bonus",
    image: "/icons/bonus_1.svg",
    color: "#fff"
  },
  {
    name: "Health Benefits",
    image: "/icons/bonus_1.svg",
    color: "#e53b3a"
  },
  {
    name: "Paid Leave Policy",
    image: "/icons/bonus_1.svg",
    color: "#DDEE10"
  },
  {
    name: "Learning And Development",
    image: "/icons/bonus_1.svg",
    color: "#CB1F8A"
  },
  {
    name: "Food Credit",
    image: "/icons/bonus_1.svg",
    color: "#2AE6C1"
  },
  {
    name: "Team Activities",
    image: "/icons/bonus_1.svg",
    color: "#2A7DE6"
  },
]

export default function Home() {
  const [model, setModel] = useState({ active: false, index: 0 })
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis()

      lenis.on('scroll', (e: any) => {
        console.log(e)
      })

      lenis.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)
    }
  }, []);



  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#part-1",
        start: "50% 50%",
        end: "200% 50%",
        scrub: true,
        // markers: true,
        pin: true
      }
    })
    tl.to("#rotate_div", {
      rotate: -15,
      scale: 0.8
    }, "a")

    tl.to("#row_div_2", {
      marginTop: "5%"
    }, "a")

    tl.to("#row_div_3", {
      marginTop: "-2%"
    }, "a")

    tl.to("#row_div_4", {
      marginTop: "-8%"
    }, "a")

    tl.to("#row_div_5", {
      marginTop: "-10%"
    }, "a")
    tl.to("#over_lay h1", {
      opacity: "1"
    }, "a")
    tl.to("#over_lay .wordcont", {
      opacity: "1",
      delay: "0.1"
    }, "a")
    tl.to("#over_lay p", {
      opacity: "1",
      delay: "0.2"
    }, "a")
    tl.to("#over_lay button", {
      opacity: "1",
      delay: "0.3"
    }, "a")
    tl.to("#over_lay", {
      backgroundColor: "#0000007f"
    }, "a")
    tl.to(".scroll_c", {
      width: "100%"
    }, "a")

    gsap.timeline({
      scrollTrigger: {
        trigger: "#part-2",
        start: "0% 70%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
      }
    }).to("#rounded_wrap", {
      height: "0",
      marginTop: "0"
    })
    gsap.timeline({
      scrollTrigger: {
        trigger: "#part-3",
        start: "top 50%",
        end: "50% top",
        scrub: true,
        // markers: true,
      }
    }).to("#part-3 .card-1", {
      opacity: 1,
      delay: "0.2"
    }, "b")
      .to("#part-3 .card-2", {
        opacity: 1,
        delay: "0.4"
      }, "b")
      .to("#part-3 .card-3", {
        opacity: 1,
        delay: "0.6"
      }, "b")
      .to("#part-3 .card-4", {
        opacity: 1,
        delay: "0.8"
      }, "b")
      .to("#part-3 .card-5", {
        opacity: 1,
        delay: "0.9"
      }, "b")
      .to("#part-3 .card-6", {
        opacity: 1,
        delay: "1.2"
      }, "b")

    gsap.timeline({
      scrollTrigger: {
        trigger: "#part-4",
        start: "top 50%",
        end: "50% 30%",
        scrub: true,
        // markers: true,
      }
    }).to("#part-4 .card-1", {
      opacity: 1,
      delay: "0.2"
    }, "c")
      .to("#part-4 .card-2", {
        opacity: 1,
        delay: "0.3"
      }, "c")
      .to("#part-4 .card-3", {
        opacity: 1,
        delay: "0.4"
      }, "c")
      .to("#part-4 .card-4", {
        opacity: 1,
        delay: "0.5"
      }, "c")
      .to("#part-4 .card-5", {
        opacity: 1,
        delay: "0.6"
      }, "c")
      .to("#part-4 .card-6", {
        opacity: 1,
        delay: "0.7"
      }, "c")
      .to("#part-4 .card-7", {
        opacity: 1,
        delay: "0.8"
      }, "c")
      .to("#part-4 .card-8", {
        opacity: 1,
        delay: "0.9"
      }, "c")



  }, [])

  return (
    <>
      <head>
        <title>Join Metalogic: Explore Exciting Career Opportunities in Innovation</title>
        <meta
          name="description"
          content="Embark on a rewarding journey with Metalogic. Discover diverse career opportunities where innovation meets passion. Join our dynamic team, and contribute to cutting-edge projects that redefine the future of technology. Explore frontend jobs, backend jobs, DevOps roles, senior positions, junior opportunities, and internships."
        />
      </head>
      <Navbar />
      <div id="part-1" className="w-full h-[100vh] bg-gray overflow-hidden">
        <div id="content-part-1" className="w-full h-[100vh] flex items-center justify-center">
          <div id="rotate_div" className="w-[200vw] h-[200vh] gap-[1vw] flex items-start justify-center scale-[1]">
            <div id="row_div_1" className="row_div">
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m1.jpg" alt="img_1" width={500} height={500} />
              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m2.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m3.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m4.jpg" alt="img_1" width={500} height={500} />

              </div>
            </div>
            <div id="row_div_2" className="row_div mt-[10%]">
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m5.jpg" alt="img_1" width={500} height={500} />
              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m6.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m7.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m8.jpg" alt="img_1" width={500} height={500} />

              </div>
            </div>
            <div id="row_div_3" className="row_div mt-[8%]">
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m1.jpg" alt="img_1" width={500} height={500} />
              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m9.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m2.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m3.jpg" alt="img_1" width={500} height={500} />

              </div>
            </div>
            <div id="row_div_4" className="row_div mt-[6%]">
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m4.jpg" alt="img_1" width={500} height={500} />
              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m5.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m6.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m7.jpg" alt="img_1" width={500} height={500} />

              </div>
            </div>
            <div id="row_div_5" className="row_div mt-[4%]">
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m8.jpg" alt="img_1" width={500} height={500} />
              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m9.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m3.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m4.jpg" alt="img_1" width={500} height={500} />

              </div>
            </div>
          </div>
          <div id="over_lay" className="w-full h-[100vh] bg-transparent absolute flex flex-col items-center justify-center text-white gap-3">
            <h1 className="opacity-0 mb-10 font-semibold text-[1.5vw]">Careers</h1>
            <div className="wordcont text-[5vw] flex flex-col font-extrabold items-center justify-center opacity-0">
              <h2>Navigate Your Next</h2>
              <div className="flex gap-[3vw]">
                <h2 className="text-green-400">Career</h2>
                <h2>Move</h2>
              </div>
            </div>
            <p className="opacity-0">We're continiously searching for the right talent. Check if you're a good match.</p>
            <button className="bg-primary text-white rounded py-2 px-6 mt-10 opacity-0">Explore Opportunities</button>
          </div>
          <div className="absolute bottom-5 flex flex-col justify-center items-center gap-1">
            <h3 className="uppercase text-white font-semibold text-[0.7vw]">Scroll Down</h3>
            <div className="scroll_p h-[2px] w-[5vw] bg-gray rounded-full">
              <div className="scroll_c h-[2px] w-[0vw] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="part-2" className="w-full h-[10vh] bg-white">
        <div id="rounded_wrap" className="w-full relative h-[100px] overflow-hidden mt-[-100px]">
          <div id="rounded-div" className="absolute left-[50%] w-[150%] h-[750%] rounded-[50%] bg-white"></div>
        </div>
      </div>
      <div id="part-3" className="w-full h-max flex flex-col gap-[3vh]">
        <Headingpart title1="Values" title2="We Believe in" title3="We believe in creating an environment where individuals can thrive and make a meaningful impact." />
        <div className="grid grid-cols-3 p-[3vw] gap-[2vw]">
          <div className="card-1 relative overflow-hidden opacity-0 border-2 border-primary rounded p-[2vw] flex flex-col gap-[1vw] items-center justify-center">
            <div className="w-full text-[1.5vw] z-10 text-white">01.</div>
            <div className="w-full bg-primary h-[3vw] absolute top-0 rotate-[-40deg] left-[-10vw]"></div>
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-2 relative overflow-hidden opacity-0 border-2 border-primary rounded p-[2vw] flex flex-col gap-[1vw] items-center justify-center">
            <div className="w-full text-[1.5vw] z-10 text-white">02.</div>
            <div className="w-full bg-primary h-[3vw] absolute top-0 rotate-[-40deg] left-[-10vw]"></div>
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-3 relative overflow-hidden opacity-0 border-2 border-primary rounded p-[2vw] flex flex-col gap-[1vw] items-center justify-center">
            <div className="w-full text-[1.5vw] z-10 text-white">03.</div>
            <div className="w-full bg-primary h-[3vw] absolute top-0 rotate-[-40deg] left-[-10vw]"></div>
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-4 relative overflow-hidden opacity-0 border-2 border-primary rounded p-[2vw] flex flex-col gap-[1vw] items-center justify-center">
            <div className="w-full text-[1.5vw] z-10 text-white">04.</div>
            <div className="w-full bg-red h-[3vw] absolute top-0 rotate-[-40deg] left-[-10vw]"></div>
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-5 relative overflow-hidden opacity-0 border-2 border-primary rounded p-[2vw] flex flex-col gap-[1vw] items-center justify-center">
            <div className="w-full text-[1.5vw] z-10 text-white">05.</div>
            <div className="w-full bg-red h-[3vw] absolute top-0 rotate-[-40deg] left-[-10vw]"></div>
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-6 relative overflow-hidden opacity-0 border-2 border-primary rounded p-[2vw] flex flex-col gap-[1vw] items-center justify-center">
            <div className="w-full text-[1.5vw] z-10 text-white">06.</div>
            <div className="w-full bg-red h-[3vw] absolute top-0 rotate-[-40deg] left-[-10vw]"></div>             <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
        </div>
      </div>

      <div id="part-4" className="h-max pt-[3vw] w-full bg-gray">
        <Headingpart title1="Benifits" title2sp="Life At MetaLogic" />
        <div className="grid grid-cols-4 p-[3vw] gap-[1vw]">
          <div className="card-1 bg-white relative overflow-hidden opacity-0 border-primary rounded p-[1vw] flex flex-col gap-[1vw] items-center justify-center">
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-2 bg-white relative overflow-hidden opacity-0 border-primary rounded p-[1vw] flex flex-col gap-[1vw] items-center justify-center">

            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-3 bg-white relative overflow-hidden opacity-0 border-primary rounded p-[1vw] flex flex-col gap-[1vw] items-center justify-center">

            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-4 bg-white relative overflow-hidden opacity-0 border-primary rounded p-[1vw] flex flex-col gap-[1vw] items-center justify-center">
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-5 bg-white relative overflow-hidden opacity-0 border-primary rounded p-[1vw] flex flex-col gap-[1vw] items-center justify-center">
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-6 bg-white relative overflow-hidden opacity-0 border-primary rounded p-[1vw] flex flex-col gap-[1vw] items-center justify-center">
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-7 bg-white relative overflow-hidden opacity-0 border-primary rounded p-[1vw] flex flex-col gap-[1vw] items-center justify-center">
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
          <div className="card-8 bg-white relative overflow-hidden opacity-0 border-primary rounded p-[1vw] flex flex-col gap-[1vw] items-center justify-center">
            <img className="h-[5vw] w-5vw]" src="/icons/continious_learning.36f5be64.svg" alt="icons" />
            <h1 className="text-primary font-semibold">Continious Learning</h1>
            <p className="text-center">We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set. We're dedicated to your professional development journey.</p>
          </div>
        </div>
      </div>

      <div id="part-5" className="h-max w-full bg-primary p-[5vw]">
        <div className="flex text-white gap-[3vw]">
          <h1 className="flex-1 text-[5vw] font-semibold">Metalogic Cares For You</h1>

          <p className='flex-1 text-[1.2vw]'>We're less about valuing perks and more about valuing people. Our employee benefits are built around enhancing your wellbeing - at work and at home.</p>
        </div>

        <div className="text-[3vw] text-gray">

          <div className='relative'>

            {
              List.map((i, j) => (
                <Skill Item={i} key={j} index={j} Model={setModel} />
              ))
            }
            <ImageComp List={List} Model={model} />
          </div>

          {/* <div className="group flex border-b-2 items-center justify-between cursor-pointer py-[1vw]">
            <h2>01.</h2>
            <div className='p-1 overflow-hidden relative cursor-pointer leading-10'>
              <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>Food Credit</span>
              <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Food Credit</span>
            </div>
          </div> */}
          {/* <div className="group flex border-b-2 items-center justify-between cursor-pointer py-[1vw]">
            <h2>02.</h2>
            <div className='p-1 overflow-hidden relative cursor-pointer leading-10'>
              <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>Health Benefits</span>
              <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Health Benefits</span>
            </div>
          </div>

          <div className="group flex border-b-2 items-center justify-between cursor-pointer py-[1vw]">
            <h2>03.</h2>
            <div className='p-1 overflow-hidden relative cursor-pointer leading-12'>
              <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>Learning And Development</span>
              <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Learning And Development</span>
            </div>
          </div>
          <div className="group flex border-b-2 items-center justify-between cursor-pointer py-[1vw]">
            <h2>04.</h2>
            <div className='p-1 overflow-hidden relative cursor-pointer leading-12'>
              <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>Performance Bonus</span>
              <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Performance Bonus</span>
            </div>
          </div>

          <div className="group flex border-b-2 items-center justify-between cursor-pointer py-[1vw]">
            <h2>05.</h2>
            <div className='p-1 overflow-hidden relative cursor-pointer leading-10'>
              <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>Paid Leave Policy</span>
              <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Paid Leave Policy</span>
            </div>
          </div>
          <div className="group flex border-b-2 items-center justify-between cursor-pointer py-[1vw]">
            <h2>06.</h2>
            <div className='p-1 overflow-hidden relative cursor-pointer leading-10'>
              <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>Team Activities</span>
              <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Team Activities</span>
            </div>
          </div> */}


        </div>
      </div>


      {/* <Footer /> */}
    </>
  );
}
