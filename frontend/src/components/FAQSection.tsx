import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How does the AI generate notes and quizzes?",
    answer: "Our AI uses advanced algorithms to analyze your uploaded documents and videos, extracting key points to create concise notes, quizzes, and summaries."
  },
  {
    question: "Is there a limit to the number of quizzes I can generate?",
    answer: "There is no limit to the number of quizzes you can generate."
  },
  {
    question: "How can the AI Chatbot help me?",
    answer: "The AI Chatbot facilitates communication between parents and teachers, allowing them to chat, share updates, and address queries efficiently."
  },
  {
    question: "What if I need support or have questions about the application?",
    answer: "If you need support or have any questions, you can contact our customer support team through the 'contacts' mentioned in the end."
  },
  {
    question: "Can I use the application on my mobile device?",
    answer: "Yes, our application is fully responsive and can be accessed on both desktop and mobile devices for your convenience."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-darkBlue to-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white bg-opacity-75 p-4 rounded-lg shadow-lg">
              <button 
                className="w-full text-left text-xl font-bold text-darkBlue"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }} 
                  transition={{ duration: 0.3 }} 
                  className="overflow-hidden"
                >
                  <p className="text-darkBlue mt-2">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
