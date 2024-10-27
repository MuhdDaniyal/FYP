import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative h-[90vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        
        <div className="text-left text-white lg:w-1/2 space-y-4 lg:pr-8">
          <h1 className="text-5xl font-bold animate-fade-in">
            AI-powered Study Assistant
          </h1>
          <p className="text-2xl animate-fade-in-delay">
            Generate notes, quizzes and more from your documents effortlessly.
          </p>
        </div>

        
        <div className="lg:w-1/2 flex justify-center items-center lg:ml-12">
          <img
            src="/mychoice-removebg-preview.png"
            alt="StudyMate AI"
            className="w-[600px] h-auto animate-slide-in"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
