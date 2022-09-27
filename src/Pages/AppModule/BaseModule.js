import React from "react";
import TokopediaScreper from "./TokopediaScraper";
import TokopediaUploader from "./TokopediaUploader";
import M from "materialize-css/dist/js/materialize.min.js";

class BaseModul extends React.Component{

		componentDidMount(){
			var elm = document.querySelectorAll(".tap")
			M.Tabs.init(elm, {})
				
		}

		render(){
			return(
				<div className="row">
					<div className="col s12 m3 l3">
						<ul className="collection tap">
							<li className="tab"><a href="#tpsraper" className="collection-item">Tokopedia Scraper</a></li>
							<li className="tab"><a href="#tpuploader" className="collection-item">Tokopedia Uploader</a></li>
							<li className="tab"><a href="#blscraper" className="collection-item">Bukalapak Scraper</a></li>
							<li className="tab"><a href="#bluploader" className="collection-item">Bukalapak Uploader</a></li>
							<li className="tab"><a href="#spsraper" className="collection-item">Shopee Scraper</a></li>
							<li className="tab"><a href="#spuploader" className="collection-item">Shopee Uploader</a></li>
						</ul>
					</div>
					<div className="col s12 m9 l9">
						<div id="tpsraper" className="col s12"><TokopediaScreper /></div>
						<div id="tpuploader" className="col s12"><TokopediaUploader /></div>
						<div id="blscraper" className="col s12">Bukalapak Scraper</div>
						<div id="bluploader" className="col s12">Bukalapak Uploader</div>
						<div id="spsraper" className="col s12">Shopee Scraper</div>
						<div id="spuploader" className="col s12">Shopee Uploader</div>
					</div>
				</div>
			)
		}
	}

export default BaseModul;
