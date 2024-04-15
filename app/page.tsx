"use client"
import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Lenis from '@studio-freight/lenis';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useLayoutEffect } from "react";

export default function Home() {
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
        end: "250% 50%",
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
        markers: true,
      }
    }).to("#rounded_wrap",{
          height: 0,
          marginTop: 0
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
      <div id="part-2" className="w-full h-[100vh] bg-white">
      <div id="rounded_wrap" className="w-full relative h-[100px] overflow-hidden mt-[-100px]">
        <div id="rounded-div" className="absolute left-[50%] w-[150%] h-[750%] rounded-[50%] bg-white"></div>
      </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
