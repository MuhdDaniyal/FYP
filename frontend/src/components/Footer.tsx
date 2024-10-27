import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center space-x-4">
            <img src="/image-removebg-preview.png" alt="StudyMate AI Logo" className="h-8" />
            <span className="text-xl font-bold">StudyMate AI</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-x-4 md:space-x-6">
            <a href="mailto:support@studymate.ai" className="flex items-center text-sm hover:text-yellowHighlight">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              support@studymate.ai
            </a>
            <a href="tel:(123) 456-7890" className="flex items-center text-sm hover:text-yellowHighlight">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              (92) 111-222-333
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:text-yellowHighlight">
              <FontAwesomeIcon icon={faFacebookF} className="mr-2" />
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:text-yellowHighlight">
              <FontAwesomeIcon icon={faInstagram} className="mr-2" />
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:text-yellowHighlight">
              <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
        <hr className="border-t border-gray-200 my-6" />
        <div className="text-center text-sm">
          &copy; 2024 StudyMate AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
