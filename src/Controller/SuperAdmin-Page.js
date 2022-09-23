import React, { Fragment } from "react";
import SuperAdminPost from "../Components/SuperAdminPost";

class SuperAdminPage extends React.Component{
	constructor(){
		super()
		this.state = {
				posts: []
			}
	}

	componentDidMount() {
		fetch("http://localhost:8000/sp/api/v1/all")
		.then(response => response.json())
		.then(data => this.setState({
				posts: data.users
			}))
	}

	render(){
		console.log(this.state.posts)
		return(
			<Fragment>
				{
				this.state.posts.map(post => <SuperAdminPost key={post.id} no={post.no} username={post.username} email={post.email} phone={post.hp} disabled={post.disabled} />)
			}
			</Fragment>
		)
	}
}

export default SuperAdminPage;
