import React, { Fragment, useState } from "react";
import BaseModul from "./AppModule/BaseModule";

const Dashboard = () => {
	const [contract, setContract] = useState()

	const token_id = localStorage.getItem("token_id")
	
	const requestOptions = {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({id: token_id})
	}

	fetch("http://localhost:8000/sp/api/v1/user/token", requestOptions)
	.then(response => response.json())
	.then(data => {
		if (data) {
				document.getElementById("username").innerHTML = data.username;
				if (data.disabled) {
						const dt = new Date(data.message * 1000)
						const elm = document.getElementById("validate_exp")
							elm.innerHTML = "Expiration Time: "+ dt;
						
						setContract(true)

					} else {
						document.getElementById("validate_exp").innerHTML = "Akun anda belum aktif";
						setContract(false)
					}
			} else {
				document.getElementById("title").innerHTML = "terjadi kesalahan!";
			}	
		})

	return(
		<Fragment>
			<div className="row">
				<div className="col s12">
					<p id="validate_exp"></p>
					<h6 id="title">Selamat datang Bpk/Ibu <b id="username" style={{textTransform: "capitalize"}}></b></h6>
				</div>
			</div>

			{contract && <BaseModul />}

		</Fragment>
	)
}

export default Dashboard;
