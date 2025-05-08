import { Link } from "react-router-dom"
import Logo from "@assets/image.webp"
import { Navlinks } from "./Navlinks"
import Button from "@components/navbar/Button"

const Navbar = () => {
  return (
    <nav className="w-full h-[100px] lg:h-[120px] flex items-center justify-center px-4 md:px-8 lg:px-12 max-w-1320 mx-auto">
      
      {/* Left: Logo */}
      <div className="flex-shrink-0 w-[160px] lg:w-[170px]">
        <img
          src={Logo}
          alt="Company logo"
          className="h-[70px] lg:h-[75px] w-full object-contain transition-transform duration-200 hover:scale-105"
        />
      </div>

      {/* Center: Navigation Links */}
      <div className="flex-1 flex justify-center items-center gap-4 md:gap-6 lg:gap-[35px] ml-12 md:ml-16 lg:ml-20">
        {Navlinks.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="text-sm md:text-[15px] lg:text-base text-black font-medium hover:text-blue-600 transition whitespace-nowrap"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Right: CTA Button */}
      <div className="flex-shrink-0 ml-12 md:ml-16 lg:ml-20">
        <Button
          variant="gradient"
          className="text-sm md:text-base w-[120px] md:w-[150px] lg:w-[184px] h-[44px] md:h-[48px] lg:h-[53px]"
          text="Request Demo"
        />
      </div>
    </nav>
  )
}

export default Navbar