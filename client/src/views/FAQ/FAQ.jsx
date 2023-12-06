import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from '../../components/Footer/Footer';
import "./FAQ.less";

export default function FAQ({ textScale, textScaleUpdate }) {
  const [activeQuestions, setActiveQuestions] = useState([]);

  const questionsAndAnswers = [
    {
      question: "What is CodeSparks?",
      answer: "CodeSparks, or Computation and Science Modeling through Making, is a cloud-based programming interface designed for fifth and sixth grade students...",
    },
    {
      question: "How does CodeSparks work?",
      answer: "CodeSparks makes use of Google's Blockly JavaScript library to build...",
    },
    // ... Add more questions and answers here
  ];

  const toggleQuestion = (index) => {
    if (activeQuestions.includes(index)) {
      // If the question is already active, remove it
      setActiveQuestions(activeQuestions.filter((item) => item !== index));
    } else {
      // If the question is not active, add it
      setActiveQuestions([...activeQuestions, index]);
    }
  };

  return (
    <div className="container nav-padding">
      <NavBar />
      <div id="faq-content-container">
        <h1 id="title" style={{ fontSize: `${45 * textScale}px`, fontWeight: 'bold' }}>Frequently Asked Questions</h1>

        {questionsAndAnswers.map((item, index) => (
          <div key={index}>
            <h2 className="question" onClick={() => toggleQuestion(index)}>
              {item.question}
            </h2>
            {activeQuestions.includes(index) && <p className="answer" style={{ fontSize: `${20 * textScale}px` }}>{item.answer}</p>}
            <div id="divider" />
          </div>
        ))}
      </div>
      <Footer textScale={textScale} textScaleUpdate={textScaleUpdate} />
    </div>
  );
}
