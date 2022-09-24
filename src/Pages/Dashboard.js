import React, { Fragment } from "react";

const Dashboard = () => {

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
							// console.log(data.message)
					} else {
						document.getElementById("validate_exp").innerHTML = "Akun anda belum aktif";
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
			
				<div className="row">	
					<div className="col s12 m3 l3">
						<div className="collection">
							<a className="collection-item">Tokopedia Scraper</a>
							<a className="collection-item">Tokopedia Uploader</a>
							<a className="collection-item">Bukalapak Scraper</a>
							<a className="collection-item">Bukalapak Uploader</a>
							<a className="collection-item">Shopee Scraper</a>
							<a className="collection-item">Shopee Uploader</a>
						</div>	
					</div>
					<div className="col s12 m9 l9">
						<h1>Welcome ...</h1>
					</div>
				</div>	
			</div>
		</Fragment>
	)
}

export default Dashboard;
