import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the CBIT Cyber Security Club?",
      answer: "The CBIT Cyber Security Club is an organization dedicated to educating and empowering students in the field of cyber security."
    },
    {
      question: "Who can join the club?",
      answer: "Any student of CBIT with an interest in cyber security is welcome to join the club."
    },
    {
      question: "What activities does the club offer?",
      answer: "We offer workshops, seminars, hackathons, and collaborative projects focused on various aspects of cyber security."
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
