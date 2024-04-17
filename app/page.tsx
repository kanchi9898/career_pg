"use client"
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Lenis from '@studio-freight/lenis';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect, useState } from "react";
import Headingpart from "./components/Headingpart";
import ImageComp from "./components/Model";
import Carelist from "./components/Carelistcomp";
import Card from "./components/Card";
import { CareList, Benefitslist, Valueslist } from "./components/ListCollection";

export default function Home() {
  const [model, setModel] = useState({ active: false, index: 0 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis()

      lenis.on('scroll', (e: any) => {
        // console.log(e)
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
        pin: true
      }
    })
    tl.to("#rotate_div", {
      rotate: -15,
      scale: 0.8
    }, "a")

    tl.to("#row_div_2", {
      marginTop: "-2%"
    }, "a")

    tl.to("#row_div_3", {
      marginTop: "-5%"
    }, "a")

    tl.to("#row_div_4", {
      marginTop: "-7%"
    }, "a")

    tl.to("#row_div_5", {
      marginTop: "-9%"
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
    tl.to("#over_lay #button", {
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
      }
    }).to("#part-4 .card-1", {
      opacity: 1,
      delay: "0.2"
    }, "c")
      .to("#part-4 .card-2", {
        opacity: 1,
        delay: "0.4"
      }, "c")
      .to("#part-4 .card-3", {
        opacity: 1,
        delay: "0.6"
      }, "c")
      .to("#part-4 .card-4", {
        opacity: 1,
        delay: "0.8"
      }, "c")
      .to("#part-4 .card-5", {
        opacity: 1,
        delay: "1"
      }, "c")
      .to("#part-4 .card-6", {
        opacity: 1,
        delay: "1.2"
      }, "c")
      .to("#part-4 .card-7", {
        opacity: 1,
        delay: "1.4"
      }, "c")
      .to("#part-4 .card-8", {
        opacity: 1,
        delay: "1.6"
      }, "c")

    gsap.timeline({
      scrollTrigger: {
        trigger: "#part-6",
        start: "0% 90%",
        end: "50% 40%",
        scrub: 1,
      }
    }).to("#rounded_wrap-6", {
      height: "0",
      marginTop: "0"
    })



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
          <div id="rotate_div" className="lg:h-[190vh] lg:w-[180vw] md:[180vw] md:h-[150vh] w-[380vw] h-[120vh] gap-[1vw] flex items-start justify-center scale-[1]">
            <div id="row_div_1" className="row_div md:w-[calc(180vw/5)] lg:w-[calc(190vw/5)] w-[calc(380vw/5)]">
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
            <div id="row_div_2" className="row_div md:w-[calc(180vw/5)] lg:w-[calc(190vw/5)] w-[calc(380vw/5)] mt-[5%] md:mt-[11%]">
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m12.jpg" alt="img_1" width={500} height={500} />
              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m11.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m14.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m13.jpg" alt="img_1" width={500} height={500} />

              </div>
            </div>
            <div id="row_div_3" className="row_div md:w-[calc(180vw/5)] lg:w-[calc(190vw/5)] w-[calc(380vw/5)] mt-[0%] md:mt-[8%]">
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m9.jpg" alt="img_1" width={500} height={500} />
              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m10.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m15.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m16.jpg" alt="img_1" width={500} height={500} />

              </div>
            </div>
            <div id="row_div_4" className="row_div md:w-[calc(180vw/5)] lg:w-[calc(190vw/5)] w-[calc(380vw/5)] mt-[-4%] md:mt-[4%]">
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m19.jpg" alt="img_1" width={500} height={500} />
              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m18.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m17.jpg" alt="img_1" width={500} height={500} />

              </div>
              <div className="img_div">
                <Image className="w-full h-full" src="/vfolder/m7.jpg" alt="img_1" width={500} height={500} />

              </div>
            </div>
            <div id="row_div_5" className="row_div md:w-[calc(180vw/5)] lg:w-[calc(190vw/5)] w-[calc(380vw/5)] mt-[4%]">
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
            <h1 className="opacity-0 mb-10 font-semibold sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]">Careers</h1>
            <div className="wordcont text-[10vw] sm:text-[8vw] md:text-[7vw] lg:text-[5vw] flex flex-col font-extrabold items-center justify-center opacity-0">
              <h2>Navigate Your Next</h2>
              <div className="flex gap-[3vw]">
                <h2 className="text-green-400">Career</h2>
                <h2>Move</h2>
              </div>
            </div>
            <p className="opacity-0 text-center">We're continiously searching for the right talent. Check if you're a good match.</p>
            <div id="button" className="group bg-primary text-white rounded py-2 px-6 mt-10 opacity-0 cursor-pointer">
              <div className='p-1 overflow-hidden relative leading-12'>
                <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>Explore Opportunities</span>
                <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Explore Opportunities</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 sm:bottom-5 flex flex-col justify-center items-center gap-1">
            <h3 className="uppercase text-white font-semibold text-[3vw] sm:text-[1.9vw] md:text-[1.2vw] lg:text-[0.7vw] animate-bounce">Scroll Down</h3>
            <div className="scroll_p h-[2px] w-[20vw] sm:w-[8vw] md:w-[7.5vw] lg:w-[5vw] bg-gray rounded-full">
              <div className="scroll_c h-[2px] w-[0vw] bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="part-2" className="w-full h-[15vh] bg-white">
        <div id="rounded_wrap" className="w-full relative h-[100px] overflow-hidden mt-[-100px]">
          <div id="rounded-div" className="absolute left-[50%] w-[150%] h-[750%] rounded-[50%] bg-white"></div>
        </div>
      </div>
      <div id="part-3" className="w-full h-max flex flex-col gap-[3vh]">
        <Headingpart title1="Values" title2="We Believe in" title3="We believe in creating an environment where individuals can thrive and make a meaningful impact." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-[3vw] gap-[2vw]">
          {
            Valueslist.map((item, index) => {
              const { title, img, clsname, firstcard, para } = item
              return (
                <Card firstcard={firstcard} img={img} index={index + 1} para={para} title={title} clsname={clsname} />
              )
            })
          }

        </div>
      </div>
      <div id="part-4" className="h-max pt-[5vw] w-full bg-lightgray flex flex-col gap-[3vw] sm:gap-0">
        <Headingpart title1="Benifits" title2="Life At MetaLogic" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-[3vw] gap-[2vw] sm:gap-[1vw]">


          {
            Benefitslist.map((item, index) => {
              const { title, img, clsname, firstcard, para } = item
              return (
                <Card firstcard={firstcard} img={img} index={index + 1} para={para} title={title} clsname={clsname} />
              )
            })
          }







        </div>
      </div>
      <div id="part-5" className="h-max w-full bg-white p-[5vw]">
        <div className="flex text-primary gap-[3vw] flex-col md:flex-row mb-[10vw] md:mb-0">
          <h1 className="flex-1 text-[8vw] text-center md:text-start md:text-[5vw] font-semibold">Metalogic Cares For You</h1>
          <p className='flex-1 text-center md:text-start md:text-[1.7vw] lg:text-[1.2vw]'>We're less about valuing perks and more about valuing people. Our employee benefits are built around enhancing your wellbeing - at work and at home.</p>
        </div>
        <div className="text-[5vw] md:text-[3vw] text-gray relative">

          {
            CareList.map((i, j) => (
              <Carelist Item={i} key={j} index={j} Model={setModel} />
            ))
          }
          <ImageComp List={CareList} Model={model} />
        </div>
      </div>
      <div id="part-6" className="w-full h-[20vh] bg-gray">
        <div id="rounded_wrap-6" className="w-full relative h-[100px] overflow-hidden mt-[100px]">
          <div id="rounded-div-6" className="absolute left-[50%] w-[150%] h-[750%] rounded-[50%] bg-white"></div>
        </div>
      </div>
      <div id="part-7" className="w-full h-max bg-gray flex items-center justify-center pb-[20vh]">
        <div className="w-[90%] md:w-[65%] lg:w-[50%] h-full flex flex-col gap-[3vw]">
          <Headingpart title1="Opportunities" title2sp="Available Vacancies" />
          <div className="flex flex-col gap-[1vw] items-center justify-center">
            <input className="p-2 rounded w-full outline-none" type="text" placeholder="Job Tilte / Keyword" />
            <div className="flex w-full gap-[1vw] flex-col sm:flex-row">
              <select className="flex-[0.8] w-full p-2 outline-none rounded">
                <option value="" disabled selected hidden>Choose a level</option>
                <option value="">Internships</option>
                <option value="">Junior level</option>
                <option value="">Mid level</option>
                <option value="">Senior</option>
              </select>
              <div className="group flex-[0.2] w-full bg-red text-white rounded flex items-center justify-center cursor-pointer">
                <div className='p-1 overflow-hidden relative leading-8'>
                  <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>Search</span>
                  <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Search</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="part-8" className="h-[80vh] relative w-full flex items-center justify-center">
        <video autoPlay loop muted className="w-full h-full object-cover absolute inset-0 brightness-75">
          <source src="/vfolder/getin touch.mp4" type="video/mp4" />
        </video>
        <div className="z-10 text-white absolute w-[90%] md:w-[65%] lg:w-[50%] h-full gap-3 md:gap-[2vw] flex flex-col items-center justify-center">
          <h1 className="text-white text-[6vw] md:text-[4vw] lg:text-[3vw] font-semibold">Subscribe to our News Letters</h1>
          <p className="text-center md:text-[2vw] lg:text-[1.1vw]">Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.</p>

          <div className="flex w-full gap-[1vw] flex-col sm:flex-row">
            <input className="flex-[0.8] w-full p-2 md:p-3 outline-none rounded" type="text" placeholder="Enter your Email address" />
            <div className="group flex-[0.2] w-full bg-red text-white rounded flex items-center justify-center cursor-pointer">
              <div className='p-1 overflow-hidden relative leading-8'>
                <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[180%]'>Subscribe</span>
                <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Subscribe</span>
              </div>
            </div>
          </div>
        </div>

      </div>



      <Footer />
    </>
  );
}
