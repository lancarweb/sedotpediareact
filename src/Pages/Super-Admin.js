import React from "react";
import SuperAdminPage from "../Controller/SuperAdmin-Page";

class SuperAdmin extends React.Component{
	render() {
		return(
			<div className="row">				
				<table className="highlight centered">
					<thead>
						<tr>
							<th>No</th>
							<th>Username</th>
							<th>Email</th>
							<th>No. Hp</th>
							<th>Aksi</th>
						</tr>
					</thead>
					<SuperAdminPage />	
				</table>
			</div>
		)
	}
}

export default SuperAdmin;
