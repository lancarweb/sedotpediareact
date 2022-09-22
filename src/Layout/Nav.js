import React, { Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

class Nav extends React.Component{
	componentDidMount(){
		const elm = document.querySelectorAll(".sidenav")
		M.Sidenav.init(elm)
	}

	render(){
		function logOut(){
			localStorage.removeItem("token_id")
			window.location.reload()
		}

		return(
			<Fragment>
			<nav className="z-depth-0 green">
				<Link to="/" className="brand-logo">Sedotpedia</Link>
				<Link to="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><Link to="/">Home</Link></li>
					<li><Link to="produk">Produk</Link></li>
					<li><Link to="panduan">Panduan</Link></li>		
					<li><Link to="blog">Blog</Link></li>
					<li><Link to="kontak">Kontak</Link></li>
					{localStorage.getItem("token_id")?
						<Fragment><li><Link className="waves-effect waves-light btn-small green darken-3 z-depth-0" to="dashboard">Dashboard</Link></li>
 						<li><Link className="waves-effect waves-light btn-small deep-orange darken-3 z-depth-0" type="submit" value="Logout" onClick={logOut}>Logout</Link></li></Fragment>:
						<li><Link className="waves-effect waves-light btn-small green darken-3 z-depth-0" to="join">Join</Link></li>
					}	
				</ul>
			</nav>
			<ul className="sidenav" id="mobile-demo">	
    			<li><Link to="produk">Produk</Link></li>
    			<li><Link to="panduan">Panduan</Link></li>
    			<li><Link to="blog">Blog</Link></li>
				<li><Link to="kontak">Kontak</Link></li>
				{localStorage.getItem("token_id")?
					<Fragment><li><Link className="waves-effect waves-light btn-small green darken-3 z-depth-0" to="dashboard">Dashboard</Link></li>
						<li><Link className="waves-effect waves-light btn-small deep-orange darken-3 z-depth-0" type="submit" value="Logout" onClick={logOut}>Logout</Link></li></Fragment>:
					<li><Link to="join">Join</Link></li>
					
				}
  			</ul>
			</Fragment>
		)
	}
}

export default Nav;