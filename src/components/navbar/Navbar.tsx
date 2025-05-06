import { Link } from "react-router-dom"
import Logo from "@assets/image.webp"
import { Navlinks } from "./Navlinks"
import Button from "@components/navbar/Button"

const Navbar = () => {
  return (
    <nav className="bg-yellow-100   py-4">
      <div className="bg-blue-100 max-w-7xl mx-auto px-[100px]"> {/* 300px left and right padding */}
        <div className="flex items-center justify-between">
          
          {/* Logo - Customizable Left Margin */}
          <Link to="/" className="flex items-center space-x-2 ml-4"> {/* Add ml-4 for left space */}
            <img
              src={Logo}
              alt="Company logo"
              className="h-16 w-auto transition-transform duration-200 hover:scale-105"
            />
          </Link>

          {/* Nav Menu - Centered with equal gap on both sides */}
          <div className="flex-grow flex justify-center gap-8">
            {Navlinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-black font-medium hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Button variant="gradient" text="Request a Demo" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
