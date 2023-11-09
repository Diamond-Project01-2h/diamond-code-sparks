import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./FAQ.less";

export default function FAQ(props) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questionsAndAnswers = [
    {
      question: "What is CASMM?",
      answer: "CASMM, or Computation and Science Modeling through Making, is a cloud-based programming interface designed for fifth and sixth grade students...",
    },
    {
      question: "How does CASMM work?",
      answer: "CASMM makes use of Google's Blockly JavaScript library to build...",
    },
    // ... Add more questions and answers here
  ];

  return (
    <div className="container nav-padding">
      <NavBar />
      <div id="faq-content-container">
        <h1 id="title">Frequently Asked Questions</h1>

        {questionsAndAnswers.map((item, index) => (
          <div key={index}>
            <h2 className="question" onClick={() => setActiveQuestion(index)}>
              {item.question}
            </h2>
            {activeQuestion === index && <p className="answer">{item.answer}</p>}
            <div id="divider" />
          </div>
        ))}
      </div>
    </div>
  );
}
