"use client"; // Indicates this is a Client Component

import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import { useEffect, useRef, useState } from 'react'; // Import necessary hooks

export default function AboutPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const quoteRef = useRef(null); // Ref for the quote section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center py-16 lg:py-24">
      <div className="bg-white p-10 lg:p-16 rounded-lg shadow-xl mx-4 max-w-6xl w-full">
        {/* Image above the About Us section */}
        <img
          src="/kkp/about-us-banner.jpg"
          alt="About KKP Fincorp"
          className="w-full h-auto mb-8 rounded-lg shadow-lg"
        />

        <h1 className="text-5xl font-bold text-gray-800 mb-10 text-center">About KKP Fincorp</h1>
        
        <div className="text-xl text-gray-700 leading-relaxed text-justify space-y-8">
          <p>
            KKP Fincorp is a premier financial services provider specializing in delivering innovative and customized loan solutions. Our mission is to support the financial growth and stability of individuals and businesses through a range of flexible and efficient loan products.
          </p>
          <p>
            Established with a commitment to excellence and customer satisfaction, we offer a variety of loan services, including Gold Loans, Group Loans, and Business Loans. Each of our services is designed to cater to the specific needs of our clients, ensuring that they receive the best financial support and guidance.
          </p>
          <p>
            At KKP Fincorp, we believe in fostering long-term relationships with our clients by providing personalized service and flexible solutions. Whether you're looking for quick funding, collaborative group financial solutions, or business growth opportunities, we are dedicated to helping you achieve your financial goals.
          </p>

          {/* New Section with More Details */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision & Values</h2>
            <p>
              Our vision is to be a leader in the financial services industry, recognized for our innovative solutions, ethical practices, and unwavering commitment to customer satisfaction. We value integrity, transparency, and excellence in all that we do.
            </p>
            <p className="mt-4">
              We are driven by a passion to empower our clients with the financial tools and knowledge they need to succeed. Our values guide us in building lasting relationships and delivering superior service.
            </p>
          </div>

          {/* Another Image Section */}
          <div className="my-12">
            <img
              src="/kkp/values-image.jpg"
              alt="KKP Fincorp Values"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <p>
            We are proud to offer our clients a range of products and services that are not only flexible but also aligned with their unique needs. Whether you’re an individual seeking a personal loan, a small business owner in need of capital, or part of a group looking for collective financial solutions, KKP Fincorp is here to assist you every step of the way.
          </p>

          {/* Quote Section with Image and Pen */}
          <div
            ref={quoteRef}
            className={`mt-12 bg-white p-6 rounded-lg shadow-inner flex items-start transition-transform duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="flex items-center flex-1">
              <img
                src="/kkp/chairman.jpeg"
                alt="Founder & Chairman"
                className="w-32 h-32 rounded-full mr-6 shadow-md"
              />
              <blockquote className="text-lg italic text-gray-600 flex-1">
                "Our journey began with a vision to empower individuals and businesses through financial innovation. At KKP Fincorp, we are dedicated to providing solutions that not only meet the needs of our clients but also exceed their expectations. Our focus is on building lasting relationships based on trust, transparency, and mutual respect. We believe in creating financial solutions that empower our clients to achieve their goals and dreams."
                <span className="block mt-2 text-right">- Founder & Chairman, KKP Fincorp</span>
              </blockquote>
            </div>
            <div className="ml-6 flex-shrink-0">
              <img
                src="/kkp/pen.avif"
                alt="Pen"
                className="w-32 h-32 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => router.push('/')}
            className="px-8 py-4 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-transform duration-300 transform hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
