import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
	
	/* Register State*/
	const [regusername, setRegUsername] = useState()
	const [regemail, setRegEmail] = useState()
	const [regpassword, setRegPassword] = useState()
	const [regphone, setRegPhone] = useState()
	
	/* login State */
	const [username,  setUsername] = useState()
	const [password, setPassword] = useState()

	/* Handle Register User */

	function handleChangeRegister(event) {
		if (event.target.name === "username") {
			setRegUsername({username: event.target.value})
		} else if (event.target.name === "email") {
			setRegEmail({email: event.target.value})
		} else if (event.target.name === "password") {
			setRegPassword({password: event.target.value})
		} else {
			setRegPhone({phone: event.target.value})
		}
	}

	function handleRegister(event) {
		event.preventDefault()
		
		if (regusername) {	
			const requestRegOptions = {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({username: regusername.username, email: regemail.email, password: regpassword.password, phone: regphone.phone})
			};

			fetch("http://localhost:8000/sp/api/v1/register", requestRegOptions)
			.then(response => response.json())
			.then(data => {
				
				if (data.response) {
					document.getElementById("username").value = "";
					document.getElementById("email").value = "";
					document.getElementById("password").value = "";
					document.getElementById("phone").value = "";
					document.getElementById("regvalid").innerHTML = data.message;
				} else {
					document.getElementById("regvalid").innerHTML = "<div style='color: red'>"+data.message+"</div>";
				}
			})
		} else {
			document.getElementById("regvalid").innerHTML = "bidang tidak boleh kosong!";
		}
	}

	/* Handle Login User */

	function handleChange(event){
		
		if (event.target.name === "username") {
			setUsername(event.target.value)
		} else {
			setPassword(event.target.value)
		}
	}

	let navigate = useNavigate()
	function toDashboard(){
		navigate("/dashboard");
	}

	function handleSubmitLogin(event) {
		event.preventDefault()
		
		/* Login Procsess */

		const requestOptions = {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({username: username, password: password})
		};

		fetch("http://localhost:8000/sp/api/v1/user", requestOptions)
		.then(response => response.json())
		.then(data => {
				
				if (data) {
					localStorage.setItem("token_id", data._id)
					toDashboard()
					window.location.reload()
				} else {
					document.getElementById("_error").innerHTML = "percobaan login gagal";
				}
			})	
	}
	
	return(
		<Fragment>
		<div className="container">
			<div className="row">
				<div className="col s12 m6 l6">
					<h5>Login</h5>
					
					<form onSubmit={handleSubmitLogin}>
						<input name="username" onChange={handleChange} className="validate" type="text" placeholder="Username" required />
						<input name="password" onChange={handleChange}  className="validate" type="password" placeholder="Password" required />
						<input className="btn green" type="submit" value="Masuk" />
					</form>
					<p id="_error" style={{color: "red"}}></p>
				</div>

				<div className="col s12 m6 l6">
					<h5>Register</h5>
					<form onSubmit={handleRegister}>
						<input id="username" name="username" onChange={handleChangeRegister}  className="validate" type="text" placeholder="Username" required />
						<input id="email" name="email" onChange={handleChangeRegister} className="validate" type="email" placeholder="Email" required />
						<input id="password" name="password" onChange={handleChangeRegister}  className="validate" type="password" placeholder="Password" required />
						<input id="phone" name="phone" onChange={handleChangeRegister}  className="validate" type="tel" placeholder="No Handphone" required />	
						<input className="btn green" type="submit" value="Daftar" />	
					</form>
					<p id="regvalid" style={{color: "green"}}></p>	
				</div>
			</div>

			<div className="row">
				<div className="col s12">
					<h5>Disclaimer</h5>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</div>
			</div>
		</div>
		</Fragment>
	)
}

export default Join;
