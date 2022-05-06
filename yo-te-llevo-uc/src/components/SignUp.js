import React, {Fragment, useState } from "react";
import '../App.css';


function SignUp() {
	const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const hostURL = ""

	const onSubmitForm = async (event) => {
        // Acá vamos a mandar la HTTP request correspondiente
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

    const handleFullNameChange = (event) => {
		setFullName(event.target.value);
	};
    
    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    };


	return (
		<Fragment>
		<div className="Login">
			<div className="Login-header">
				<h3>Sign Up</h3>
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
                        required
						className="" 
						placeholder="Full Name"
						onChange={handleFullNameChange}

					/>
                    <input
                        required
						className="" 
						placeholder="Username"
						onChange={handleUsernameChange}

					/>
					<input 
						type="password"
						required
						className="" 
						placeholder="Password"
						onChange={handlePasswordChange}
					/>
					<button className="Login-button" onSubmit={onSubmitForm}>Sign Up</button>
				</form>
			</div>
		</div>
		</Fragment>
	)
};

export default SignUp;