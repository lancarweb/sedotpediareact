import React from "react";

const LoginAdmin = () => {
	return(
		<div className="row">
			<div className="col s2 m4 l4"></div>
				<div className="col s8 m4 l4">
					<div className="card white z-depth-0">
						<div className="card-content white-text">
							<span className="card-title black-text center">Login</span>
							<form className="center">
								<input type="text" className="validate" placeholder="Username" required/>
								<input id="email" type="email" className="validate" placeholder="Email" required/>
								<div className="card-action">
									<input type="submit" className="btn green z-depth-0" value="Login"/>	
								</div>
							</form>
						</div>
					</div>
				</div>
			<div className="col s2 m4 l4"></div>
		</div>
	)
}

export default LoginAdmin;
