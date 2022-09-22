import React from "react";
import "./Base.css";
import Nav from "./Nav";
import Home from "../Pages/Home";
import Produk from "../Pages/Produk";
import Panduan from "../Pages/Panduan";
import Blog from "../Pages/Blog";
import Kontak from "../Pages/Kontak";
import Join from "../Pages/Join";
import Dashboard from "../Pages/Dashboard";
import LoginAdmin from "../Pages/Login-Admin";
import SuperAdmin from "../Pages/Super-Admin";
import Footer from "./Footer";
import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom";

class Base extends React.Component{
	render(){
		return(
			<BrowserRouter>
			<div className="container main-bg-color">
				<Nav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="produk" element={<Produk />} />
						<Route path="panduan" element={<Panduan />} />						
						<Route path="blog" element={<Blog />} />
						<Route path="kontak" element={<Kontak />} />
						{localStorage.getItem("token_id")?
						<Route path="dashboard" element={<Dashboard />  } />:
						<Route path="join" element={<Join />} />
						}
						<Route path="loginadmin" element={<LoginAdmin />}  />
						<Route path="superadmin" element={<SuperAdmin />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>	
				<Footer />
			</div>
			</BrowserRouter>
		)
	}
}

export default Base;
