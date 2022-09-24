import React, { Fragment } from "react";

const SuperAdminPost = (props) => {
	function handleActivatedUser(){
		
		const requestOptions = {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({id: props.id})
		}
		
		fetch("http://localhost:8000/sp/api/v1/user/activate", requestOptions)
		.then(response => response.json())
		.then(data => {
			if (data.updatedExisting) {
				window.location.reload()
			}
		})
	}

	return(
			<Fragment>
				<tbody>
					<tr>
						<td>{props.no}</td>
						<td>{props.username}</td>
						<td>{props.email}</td>
						<td>{props.phone}</td>
						{props.disabled?
							<Fragment><td>{props.exp}</td><td>Activated</td></Fragment>:
							<Fragment><td>...</td><td><a href="#!" onClick={handleActivatedUser} className="btn grey lighten-1 z-depth-0">Activate</a></td></Fragment>	
						}
					</tr>
				</tbody>
			</Fragment>
		)
	}

export default SuperAdminPost;
