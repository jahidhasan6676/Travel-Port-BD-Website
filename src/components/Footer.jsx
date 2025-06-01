// components/Footer.jsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00026e] text-white pt-12 pb-6">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Travel Port BD</h3>
            <p className="text-gray-200">
              Your one-stop solution for all travel needs. Book buses, trains, ships, and hotels with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-200 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-200 hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-200 hover:text-white transition">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-200 hover:text-white transition">FAQs</Link></li>
              <li><Link href="/blog" className="text-gray-200 hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/bus-tickets" className="text-gray-200 hover:text-white transition">Bus Tickets</Link></li>
              <li><Link href="/train-tickets" className="text-gray-200 hover:text-white transition">Train Tickets</Link></li>
              <li><Link href="/ship-tickets" className="text-gray-200 hover:text-white transition">Ship Tickets</Link></li>
              <li><Link href="/hotel-booking" className="text-gray-200 hover:text-white transition">Hotel Booking</Link></li>
              <li><Link href="/tour-packages" className="text-gray-200 hover:text-white transition">Tour Packages</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="text-gray-200 not-italic">
              <p>123 Travel Street</p>
              <p>City, Country 12345</p>
              <p className="mt-2">Email: info@travelease.com</p>
              <p>Phone: +1 234 567 890</p>
            </address>
            <div>
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none w-full"/>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TravelEase. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-200 hover:text-white text-sm transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-200 hover:text-white text-sm transition">Terms of Service</Link>
            <Link href="/cookies" className="text-gray-200 hover:text-white text-sm transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;