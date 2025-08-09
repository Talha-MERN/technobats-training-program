import { FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const TopBar = () => {
  return (
    //bg-[#020039] 
    <div className="bg-[#253238] text-white text-sm px-4 sm:px-20 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-center gap-3 sm:gap-2 text-center sm:text-left">
        
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-xl sm:text-xl" />
            <span className="text-lg sm:text-base">info@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-xl sm:text-xl" />
            <span className="text-lg sm:text-base">+92-316-4641190</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 text-xl sm:text-lg">
          <a href="#" className="hover:bg-white hover:text-black rounded-full py-2 px-2" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#" className="hover:bg-white hover:text-black rounded-full py-2 px-2" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" className="hover:bg-white hover:text-black rounded-full py-2 px-2" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="#" className="hover:bg-white hover:text-black rounded-full py-2 px-2" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="#" className="hover:bg-white hover:text-black rounded-full py-2 px-2" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
