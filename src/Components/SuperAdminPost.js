import React, { Fragment } from "react";

const SuperAdminPost = (props) => {
	return(
			<Fragment>
				<tbody>
					<tr>
						<td>{props.no}</td>
						<td>{props.username}</td>
						<td>{props.email}</td>
						<td>{props.phone}</td>
						{props.disabled?
							<td>Activated</td>:
							<td><a href="#!" className="btn grey lighten-1 z-depth-0">Activate</a></td>	
						}
					</tr>
				</tbody>
			</Fragment>
		)
	}

export default SuperAdminPost;
