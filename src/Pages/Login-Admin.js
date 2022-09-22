import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
	
	const [username, setUsername] = useState()
	const [password, setPassword] = useState()

	const navigate = useNavigate()
	function toSuperAdmin(){
		navigate("/superadmin")
	}

	function handleChange(event){
		if (event.target.name === "username"){
			setUsername({username: event.target.value})
		} else {
			setPassword({password: event.target.value})
		}
	}
	
	function handleSubmitForm(event){
		event.preventDefault()

		const requestOptions = {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({username: username.username, password: password.password})
		}

		fetch("http://localhost:8000/sp/api/v1/admin/login", requestOptions)
		.then(response => response.json())
		.then(data => {
			if (data.response){
				localStorage.setItem("token_admin", data.id)
				toSuperAdmin()
				window.location.reload()
			} else {
				document.getElementById("_error").innerHTML = data.message;
			}
		})
	}

	return(
		<div className="row">
			<div className="col s2 m4 l4"></div>
				<div className="col s8 m4 l4">
					<div className="card white z-depth-0">
						<div className="card-content white-text">
							<span className="card-title black-text center">Login</span>
							<form onSubmit={handleSubmitForm} className="center">
								<input onChange={handleChange} name="username" id="username" type="text" className="validate" placeholder="Username" required/>
								<input onChange={handleChange} name="password" id="password" type="password" className="validate" placeholder="Password" required/>
								<div className="card-action">
									<input type="submit" className="btn green z-depth-0" value="Login"/>
								</div>
							</form>
						</div>
					</div>
					<div id="_error" className="_error red-text center"></div>
				</div>
			<div className="col s2 m4 l4"></div>
		</div>
	)
}

export default LoginAdmin;
