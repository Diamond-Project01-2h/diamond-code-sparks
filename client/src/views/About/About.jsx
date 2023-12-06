import React from "react"
import NSF from "../../assets/nsf_logo.png"
import TAMU from "../../assets/tamu_logo.png"
import UF from "../../assets/uf_logo.png"
import BlocklyLogo from "../../assets/blocklylogo.png"
import NavBar from "../../components/NavBar/NavBar"
import "./About.less"
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useState } from "react";

export default function About({textScale, textScaleUpdate}) {
  
  const [expanded, setExpanded] = useState(false);

  const [expandedE, setExpandedE] = useState(false);

  const [expandedS, setExpandedS] = useState(false);

  return (
    <div className="container nav-padding">
      <NavBar />
      <div id="about-content-container">
        <h1 id="title">About CodeSparks</h1>
        <div id="logos" className="flex space-between">
          <img src={UF} alt="uf" />
          <img src={NSF} alt="nsf" />
          <img src={TAMU} alt="tamu" />
        </div>
        <p style={{ fontSize: `${20 * textScale}px` }}>
          CodeSparks is developed by the University of Florida and Texas A&M
          University with support from the National Science Foundation.
        </p>
        <p style={{ fontSize: `${20 * textScale}px` }}>
          CodeSparks, or Computation and Science Modeling through Making, is a
          cloud-based programming interface designed for fifth and sixth grade
          students to support them in building computational physical models for
          science experiments in the classroom.
        </p>
        
        <div id="divider" />
        <h1 id="secondary-title">How it Works</h1>
        <p style={{ fontSize: `${20 * textScale}px` }}>
          Codesparks makes use of Google's{" "}
          <a
            href="https://developers.google.com/blockly"
            style={{ color: "#3d5c82", fontWeight: "600" }}
          >
            Blockly
          </a>{" "}
          JavaScript library to build a block based visual programming editor
          within our user interface. Programs created through the visual
          programming editor can be compiled into Arduino executable code and
          uploaded directly onto a students Arduino. These programs, once
          uploaded to the student's Arduino, provide support in performing a
          corresponding science project in the classroom.
        </p>

        <div id="divider" />

        <div className="students">
          <span className="showMore" onClick={() => setExpandedS(!expandedS)}>
          <h1 id="info-title" style={{ fontWeight: 'bold' }}>For Students ▼</h1>
          </span>
          {expandedS ? (
            <div className="expandable">
              <p style={{ fontSize: `${20 * textScale}px` }}>Codesparks provides a fun learning environment to help you learn how to program an Arduino. 
                You can create on your own through the sandbox and explore the creations in the gallery 
                or join a classroom with a code provided by your teacher for guided assignments.</p>
            </div>
          ) : null}
        </div>

        <div className="parents">
          <span className="showMore" onClick={() => setExpanded(!expanded)}>
          <h1 id="info-title"style={{ fontWeight: 'bold' }}>For Parents ▼</h1>
          </span>
          {expanded ? (
            <div className="expandable">
              <p style={{ fontSize: `${20 * textScale}px` }}>Codesparks provides a safe and friendly learning environment for students of all ages that
                 allows them to learn to think more creatively through an easy-to-use block-based
                  programming language. To ensure Codesparks remains a safe space, Codesparks moderates any
                   shared content and provides educators with the tools to moderate within their classrooms.</p>
            </div>
          ) : null}
        </div>

        <div className="Educators">
          <span className="showMore" onClick={() => setExpandedE(!expandedE)}>
          <h1 id="info-title" style={{ fontWeight: 'bold' }}>For Educators ▼</h1>
          </span>
          {expandedE ? (
            <div className="expandable">
              <p style={{ fontSize: `${20 * textScale}px` }}>Codesparks allows teachers to make classrooms provide assignments for students. 
                Teachers can also create or use shared lessons to help students learn how to program an Arduino. 
                Codesparks allows students to share their creations within their classrooms or schools and
                 provides discussion boards and live dashboards to allow students to learn collaboratively.</p>
            </div>
          ) : null}
        </div>

        <div id="divider" />

        <h1 id="secondary-title">Our Team</h1>
        <p style={{ fontSize: `${20 * textScale}px` }}>
          The following team members from the University of Florida have
          contributed to the design, development, and evaluation of the Codesparks
          application:
          <br />
          <br />
          Dr. Sharon Chu
          <br />
          Dr. Christina Gardner-McCune
          <br />
          Pedro Feijóo-García
          <br />
          Sarah Brown
          <br />
          Nicholas Ionata
          <br />
          Dakota Rennemann
          <br />
          Megha Nagarmunoli
          <br />
          Adam Tamargo
          <br />
          Gus Segovia
          <br />
          Lily Hinkeldey
          <br />
          Siyu Chen
          <br />
          Anna Le
          <br />
          Yerika Jimenez
          <br />
          Siyu Chen
          <br />
          Michael Pascuzzi
          <br />
          David Magda
        </p>

        <div id="divider" />
        
        <h1 id="title">Built on</h1>
        <img src={BlocklyLogo} alt="tamu" />

      </div>
      <Footer textScale = {textScale} textScaleUpdate = {textScaleUpdate}/>
    </div>
  )
}