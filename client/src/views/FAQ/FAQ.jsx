import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from '../../components/Footer/Footer';
import "./FAQ.less";

export default function FAQ({textScale, textScaleUpdate}) {
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
        <h1 id="title" style={{ fontSize: `${45 * textScale}px` }}>Frequently Asked Questions</h1>

        {questionsAndAnswers.map((item, index) => (
          <div key={index}>
            <h2 className="question" onClick={() => setActiveQuestion(index)}>
              {item.question}
            </h2>
            {activeQuestion === index && <p className="answer" style={{ fontSize: `${20 * textScale}px` }}>{item.answer}</p>}
            <div id="divider" />
          </div>
        ))}
      </div>
      <Footer textScale = {textScale} textScaleUpdate = {textScaleUpdate}/>
    </div>
  );
}
