import React, { useState } from 'react';

const features = [
  { 
    name: 'AI Quiz Generator', 
    description: 'Generate quizzes based on your study material with ease. This feature uses advanced AI algorithms to analyze your content and create relevant questions.', 
    image: 'quiz_genpic.jpg' 
  },
  { 
    name: 'Notes Generator', 
    description: 'Create concise notes from lengthy documents. This tool helps you highlight the most important points, making your study sessions more effective.', 
    image: '/notes_genpic.jpg' 
  },
  { 
    name: 'AI Chatbot', 
    description: 'Enhance communication between parents and teachers with our intelligent chatbot. Facilitate real-time conversations, share updates, and address queries efficiently.', 
    image: '/chat_pic.jpg' 
  },
  { 
    name: 'Video Summarizer', 
    description: 'Get summaries of educational videos. Save time by reading concise summaries of video content, allowing you to grasp the key points quickly.', 
    image: '/vid_summ.jpg' 
  },
  { 
    name: 'Recommender System', 
    description: 'Receive personalized study recommendations. Our system analyzes your learning habits and suggests resources tailored to your needs.', 
    image: '/rec_sys.jpg' 
  },
];

const FeaturesSection: React.FC = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-darkBlue to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-white">Our Features</h2>
        </div>
        <div className="flex flex-wrap justify-center mb-8 space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          {features.map((feature, index) => (
            <button
              key={index}
              className={`w-full md:w-40 h-20 p-2 rounded-lg shadow-lg focus:outline-none transform transition-transform duration-300 ${
                selectedFeatureIndex === index ? 'bg-yellow-500 text-darkBlue scale-105' : 'bg-white text-darkBlue hover:scale-105'
              }`}
              onClick={() => setSelectedFeatureIndex(index)}
            >
              {feature.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 bg-gradient-to-r from-yellow-500 to-yellow-700 p-8 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-4">
                {features[selectedFeatureIndex].name}
              </h3>
              <p className="text-lg mb-2">
                {features[selectedFeatureIndex].description.split('. ')[0]}.
              </p>
              <p className="text-lg">
                {features[selectedFeatureIndex].description.split('. ').slice(1).join('. ')}
              </p>
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg flex items-center justify-center">
            <img 
              src={features[selectedFeatureIndex].image} 
              alt={features[selectedFeatureIndex].name} 
              className="rounded-lg shadow-md object-cover w-full h-96"
              style={{ width: '500px', height: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
