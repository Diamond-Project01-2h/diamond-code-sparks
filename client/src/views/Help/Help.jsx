import React, {useState, useRef} from 'react';
import NSF from "../../assets/nsf_logo.png"
import TAMU from "../../assets/tamu_logo.png"
import UF from "../../assets/uf_logo.png"
import NavBar from "../../components/NavBar/NavBar"
import "./Help.less"

export default function Help(props) {
	const[submitted, setSubmitted] = useState(false);
	const name = useRef("");
	const email = useRef("");
	const message = useRef("");
	
	const lang = useRef("en");
	
	document.documentElement.lang = lang;
	
	function submit(e) {
		// prevent page refresh
		e.preventDefault();
		setSubmitted(true);
		
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
		return <p> Thank you! We'll be in touch soon.</p>;
		setSubmitted(false);
		// change this from return
	}
  return (

    <div className="container nav-padding">
      <NavBar />
      <div id="about-content-container">
        <h1 id="title">CONTACT US</h1>
        <p>
		Do you have any questions or concerns? <br/>
		Please fill out the contact form below <br/>
		We could love to hear from you! <br/>
        </p>
		
		<div id="divider" />
		<div role = "contact form"/>
        <h1 id="secondary-title">Contact Us</h1>
				  <form onSubmit = {submit}>
		    <label htmlFor = 'name'> Name: </label><br/>
			<input 
				type = 'text' 
				id = 'name' 
				name = 'name' 
				placeholder = 'John Doe'
				onChange = {(e) => setName(e.target.value)}
				required
				/> 
				<br/>
			<label htmlFor="email">Email:</label><br/>
			<input 
				type="email" 
				id="email" 
				name="email" 
				placeholder="example@email.com"
				onChange = {(e) => setEmail(e.target.value)}
				required
				/>
				<br/>
			<label htmlFor="message">Message:</label><br/>
			<textarea 
				type="text" 
				id="message" 
				name="message" 
				placeholder="Message Field"
				onChange={(e) => setMessage(e.target.value)}
				/>
				<br/>
				<button type="submit">Submit</button>
          </form>
      </div>
    </div>
  )
}		  
