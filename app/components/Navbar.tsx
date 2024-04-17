
import Link from "next/link";
import { useEffect } from "react";
const Navbar = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    let navbar = document.getElementById("spnav");

    if (navbar) {
      window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          navbar.style.top = "-100px";
        } else {
          navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
      });
    }

  }, []);
  return (
    <main>
      <div className="absolute bg-white z-[100] flex w-full items-center justify-between p-4 lg:hidden">
        <a className="flex items-center gap-4" href="/">
          <img src="https://metalogic.com.np/metalogo.png" alt="MetaLogic" className="h-12 w-12" />
          <div className="flex flex-col">
            <h1 className="flex text-3xl font-bold tracking-widest text-primary">
              <span>Meta</span><span>Logic</span>
            </h1>
          </div>
        </a>
        <button aria-label="hamburger menu" className="absolute right-3 top-4 text-secondary-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <nav id="spnav" className="fixed hidden top-0 z-[1000] w-full bg-transparent items-center justify-between text-black backdrop-blur-xl border-b border-translucent-light-100 px-8 py-3 lg:flex">
        <Link href="/" className="flex items-center gap-4">
          <img src="https://metalogic.com.np/metalogo.png" alt="metalogic company logo" className="h-12 w-12" />
          <div className="flex flex-col">
            <h1 className="flex text-3xl font-semibold tracking-widest text-primary">
              <span>Meta</span><span>Logic</span>
            </h1>
          </div>
        </Link>
        <div id="menu" className="flex gap-8 font-semibold relative">

          <Link href="/" className="menuopt relative">
            Home
          </Link>


          <Link href="/" className="menuopt relative">Services</Link>


          <Link href="/careers" id="activemenuopt" className="menuopt relative">Career
          </Link>


          <Link href="/blogs" className="menuopt relative">Blogs
          </Link>


          <Link href="/about" className="menuopt relative">About Us
          </Link>

        </div>
        <div className="group flex-[0.2] w-full bg-red text-white rounded flex items-center justify-center cursor-pointer">
          <div className='p-1 overflow-hidden relative leading-8'>
            <span className='inline-block transition duration-500 ease-out group-hover:-translate-y-[180%]'>Get In Touch</span>
            <span className='absolute left-0 translate-y-[180%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0'>Get In Touch</span>
          </div>
        </div>
      </nav>


    </main>

  );
};

export default Navbar;
