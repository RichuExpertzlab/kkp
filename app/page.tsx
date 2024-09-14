"use client"; // Indicates this is a Client Component

import ImageCarousel from '../components/ImageCarousel';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+ routing

export default function HomePage() {
  const router = useRouter(); // Using Next.js router for navigation

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Carousel Container */}
      <div className="flex flex-col items-center justify-center">
        <ImageCarousel />
      </div>

      {/* Sections Container */}
      <div className="flex flex-wrap justify-between gap-4 py-12 px-4">
        {/* Gold Loan Section */}
        <div className="flex-1 min-w-[300px] bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-100 hover:shadow-xl">
          {/* Gold Loan Logo */}
          <img
            src="kkp/logowide.jpeg"
            alt="Gold Loan Logo"
            className="w-30 h-16 mb-4 mx-auto"
          />
          <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Gold Loan</h2>
          <p className="text-lg text-gray-700 text-justify">
            Discover the benefits of our Gold Loan services. Whether you need quick funds or financial support, our gold loan solutions are designed to meet your needs.
          </p>
        </div>

        {/* Group Loan Section */}
        <div className="flex-1 min-w-[300px] bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-100 hover:shadow-xl">
          {/* Group Loan Logo */}
          <img
            src="kkp/logowide.jpeg"
            alt="Group Loan Logo"
            className="w-30 h-16 mb-4 mx-auto"
          />
          <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Group Loan</h2>
          <p className="text-lg text-gray-700 text-justify">
            Empower your team with our Group Loan options tailored for women-led teams. Ideal for collaborative projects and initiatives that support women’s growth and empowerment.
          </p>
        </div>

        {/* Business Loan Section */}
        <div className="flex-1 min-w-[300px] bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-100 hover:shadow-xl">
          {/* Business Loan Logo */}
          <img
            src="kkp/logowide.jpeg"
            alt="Business Loan Logo"
            className="w-30 h-16 mb-4 mx-auto"
          />
          <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Business Loan</h2>
          <p className="text-lg text-gray-700 text-justify">
            Fuel your business growth with our Business Loan options. Designed for entrepreneurs and established businesses alike, our loans offer flexible terms to support your business ambitions and financial needs.
          </p>
        </div>

        {/* Personal Loan Section */}
        <div className="flex-1 min-w-[300px] bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-100 hover:shadow-xl">
          {/* Personal Loan Logo */}
          <img
            src="kkp/logowide.jpeg"
            alt="Personal Loan Logo"
            className="w-30 h-16 mb-4 mx-auto"
          />
          <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Personal Loan</h2>
          <p className="text-lg text-gray-700 text-justify">
            Access fast and flexible personal loans tailored to your individual needs. Whether it’s for unexpected expenses, travel, or personal projects, our personal loan solutions offer competitive rates and easy repayment options.
          </p>
        </div>
      </div>

      {/* About KKP Fincrop Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mx-4 my-12 flex flex-col lg:flex-row">
        {/* Image on the Left */}
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <img
            src="kkp/about-kkp.jpg"
            alt="About KKP Fincrop"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Content on the Right */}
        <div className="lg:w-2/3 lg:pl-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About KKP Fincrop</h2>
          <p className="text-lg text-gray-700 text-justify">
            KKP Fincrop is a leading financial services provider dedicated to offering innovative and tailored loan solutions to meet the diverse needs of our clients. With a commitment to excellence and customer satisfaction, we specialize in providing Gold Loans, Group Loans, Business Loans, and Personal Loans that empower individuals and businesses alike.
          </p>
          <p className="text-lg text-gray-700 mt-4 text-justify">
            Our mission is to support your financial journey with flexibility, efficiency, and personalized service. Whether you're seeking quick funding, group financial solutions, or business growth opportunities, KKP Fincrop is here to help you achieve your goals with confidence.
          </p>
          {/* Read More Button */}
          <button
            onClick={() => router.push('/about-us')}
            className="mt-6 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-transform duration-300"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
