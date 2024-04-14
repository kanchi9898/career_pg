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
        end: "150% 50%", 
        scrub: true,
        markers: true,
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
          </div>
        </div>
      {/* <Footer /> */}
    </>
  );
}
