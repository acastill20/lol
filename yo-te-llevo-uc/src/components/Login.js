import React, {Fragment, useState } from "react";
import '../App.css';


function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	const onSubmitForm = async (event) => {
		// Acá vamos a mandar la HTTP request correspondiente
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	}


	return (
		<Fragment>
		<div className="Login">
			<div className="Login-header">
				<h3>Log In</h3>
			</div>
			<div className="Login-content">
				<form className="Login-form">
					<input 
						required
						type="email" 
						className="" 
						placeholder="Email"
						onChange={handleEmailChange}

					/>
					<input 
						type="password"
						required
						className="" 
						placeholder="Password"
						onChange={handlePasswordChange}
					/>
					<button className="Login-button" onSubmit={onSubmitForm}>Log In</button>
				</form>
			</div>
		</div>
		</Fragment>
	)
};

export default Login;