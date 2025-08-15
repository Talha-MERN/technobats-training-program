import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import TechnoBatsHeaderLogo from "../images/technobats-header-logo.png";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black py-16 px-6 md:px-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
            <img src={TechnoBatsHeaderLogo} />
          <p className="text-sm leading-relaxed mt-5">
            Empowering learners with industry-focused courses in development, design, 
            and technology. Build your skills for the future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Courses</h3>
          <ul className="space-y-2">
            <li><a href="/courses/mern" className="hover:text-white transition">MERN Stack</a></li>
            <li><a href="/courses/devops" className="hover:text-white transition">DevOps</a></li>
            <li><a href="/courses/uiux" className="hover:text-white transition">UI/UX Design</a></li>
            <li><a href="/courses/graphic" className="hover:text-white transition">Graphic Design</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
          <p>Email: <a href="mailto:info@technobats.com" className="hover:text-white">info@technobats.com</a></p>
          <p>Phone: +92 316 4641190</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      
    </footer>
  );
}
