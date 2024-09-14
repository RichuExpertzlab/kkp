import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-800">
      <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="logo">
            <Link href="/">
              <Image src="/kkp/logo.jfif" alt="Company Logo" width={120} height={100} />
            </Link>
          </div>

          {/* WhatsApp Icon with Phone Number */}
          <div className="whatsapp-container flex items-center space-x-2 ml-4">
  <a 
    href="https://wa.me/1234567890" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 hover:text-green-400"
  >
    <FaWhatsapp className="text-3xl text-green-500" />
    <span className="font-bold text-gray-800 transition-colors duration-300 hover:text-green-400">
      +1 (234) 567-890
    </span> {/* Replace with your phone number */}
  </a>
</div>

        </div>

        <ul className="nav-links flex space-x-4">
          <li className='font-bold'><Link href="/">Home</Link></li>
          <li className='font-bold'><Link href="/about">About</Link></li>
          <li className='font-bold'><Link href="/contact">Contact</Link></li>
          <li className='font-bold'><Link href="/faq">FAQ</Link></li>
          <li className='font-bold'><Link href="/service">Service</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
