import logo from "@assets/image.webp"
import fb from "@assets/facebook.png"
import ig from "@assets/instagram.png"
import tw from "@assets/twitter.png"
import linkedin from "@assets/linkedin.png"

const Footer = () => {
    return (
      <footer className="w-full bg-[#0A0118] h-[400px] text-white flex justify-center items-center mt-[30px] py-10 px-6">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          {/* Left Section */}
          <div className="w-[328px] space-y-5 h-[209px]">
            <img src={logo} alt="Logo" className="w-[132px] h-auto" />
            <p className="text-sm leading-relaxed">
              BitpointX combines smart ticketing with Optimus AI to automate IT
              support, accelerate ticket resolution, and empower your team.
            </p>
            <div className="flex gap-5">
              <img src={tw} alt="Twitter" className="w-5 h-5" />
              <img src={fb} alt="Facebook" className="w-5 h-5" />
              <img src={ig} alt="Instagram" className="w-5 h-5" />
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            </div>
          </div>
  
          {/* Right Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-[20px] gap-y-6 text-sm">
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 whitespace-nowrap">
                <li>About us</li>
                <li>Solutions</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Solutions</h3>
              <ul className="space-y-2 whitespace-nowrap">
                <li>BitpointX Support</li>
                <li>Help Centre</li>
                <li>Optimus AI</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Services</h3>
              <ul className="space-y-2 whitespace-nowrap">
                <li>Documentation</li>
                <li>SLA Management</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 whitespace-nowrap">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>DPA</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer;
  