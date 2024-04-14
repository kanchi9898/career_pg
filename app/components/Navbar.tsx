
import Link from "next/link";
const Navbar = () => {
  return (
    <main>
      <div className="absolute z-[100] flex w-full items-center justify-between p-4 lg:hidden">
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
      <nav className="fixed hidden top-0 z-[1000] w-full bg-transparent items-center justify-between text-black backdrop-blur-xl border-b border-translucent-light-100 px-8 py-3 lg:flex">
        <Link href="/" className="flex items-center gap-4">
            <img src="https://metalogic.com.np/metalogo.png" alt="metalogic company logo" className="h-12 w-12" />
            <div className="flex flex-col">
              <h1 className="flex text-3xl font-semibold tracking-widest text-primary">
                <span>Meta</span><span>Logic</span>
              </h1>
            </div>
        </Link>
        <ul className="flex gap-8 font-semibold">
          <li>
            <Link href="/" >
              <p className="Navbar_link__ambd4 relative null pb-1">Home</p>
            </Link>
          </li>
          <li>
            <button className="Navbar_link__ambd4 outline:none">Services</button>
          </li>
          <li>
            <Link href="/careers" className="Navbar_link__ambd4 Navbar_active__WxVct">Career
              {/* <a className="Navbar_link__ambd4 Navbar_active__WxVct">Career</a> */}
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="Navbar_link__ambd4">Blogs
              {/* <a className="Navbar_link__ambd4">Blogs</a> */}
            </Link>
          </li>
          <li>
            <Link href="/about" className="Navbar_link__ambd4">About Us
              {/* <a className="Navbar_link__ambd4">About Us</a> */}
            </Link>
          </li>
        </ul>
        <div>
          <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-[600] transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 bg-secondary-400 text-white hover:border-secondary-400">Get in Touch
          </Link>
        </div>
      </nav>
    </main>

  );
};

export default Navbar;
