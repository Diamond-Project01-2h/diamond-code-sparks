import React, {useState, useRef} from 'react';
import NSF from "../../assets/nsf_logo.png"
import TAMU from "../../assets/tamu_logo.png"
import UF from "../../assets/uf_logo.png"
import NavBar from "../../components/NavBar/NavBar"
import Footer from '../../components/Footer/Footer';
import "./Help.less"

export default function Help({textScale, textScaleUpdate}) {
	const[submitted, setSubmitted] = useState(false);
	const name = useRef("");
	const email = useRef("");
	const message = useRef("");
	
	function submit(e) {
		// prevent page refresh
		e.preventDefault();
	}
	
	function setName(value) {
		name.current = value;
	}
	
	function setEmail(value) {
		email.current = value;
	}
	
	function setMessage(value) {
		message.current = value;
	}
	
	if (submitted) {
		return <p style={{ fontSize: `${15 * textScale}px` }}> Thank you! We'll be in touch soon.</p>;
	}
  return (
    <div className="container nav-padding">
      <NavBar />
      <div id="about-content-container">
        <h1 id="title">HELP PAGE</h1>
        <p style={{ fontSize: `${15 * textScale}px` }}>
          Please submit any questions in the contact form below
        </p>
		<div id="divider" />
        <h1 id="secondary-title">Contact Us</h1>
				  <form onSubmit = {submit}>
		    <label htmlFor = 'name' style={{ fontSize: `${15 * textScale}px` }}> Name: </label><br/>
			<input 
				type = 'text' 
				id = 'name' 
				name = 'name' 
				placeholder = 'John Doe'
				onChange = {(e) => setName(e.target.value)}
				required
				/> 
				<br/>
			<label htmlFor="email" style={{ fontSize: `${15 * textScale}px` }}>Email:</label><br/>
			<input 
				type="email" 
				id="email" 
				name="email" 
				placeholder="example@email.com"
				onChange = {(e) => setEmail(e.target.value)}
				required
				/>
				<br/>
			<label htmlFor="message" style={{ fontSize: `${15 * textScale}px` }}>Message:</label><br/>
			<textarea 
				type="text" 
				id="message" 
				name="message" 
				placeholder="Message Field"
				onChange={(e) => setMessage(e.target.value)}
				/>
				<br/>
				<button
  type="submit"
  style={{
    fontSize: `${15 * textScale}px`,
    fontFamily: 'Comic Neue, cursive',
    fontSize: '24px',
    padding: '15px 30px',
    marginTop: '20px',
    backgroundColor: '#00A0FF',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }}
>
  Submit
</button>
          </form>
      </div>
	  <Footer textScale = {textScale} textScaleUpdate = {textScaleUpdate}/>
    </div>
  )
}		  


// create an HTML form (look in HTML tutorial)
// have a submit button
// worry abt styling after
// casmm connect?