import React from "react";
import TokopediaScraperPost from "../../Components/TokopediaScraperPost";

class TokopediaScraper extends React.Component {
	constructor(){
			super()
			this.state = {url: null, data: [], btn: false}	

			this.handleChange = this.handleChange.bind(this)
			this.handleClick = this.handleClick.bind(this)
		}

	handleChange(event){
			const url = event.target.value
			this.setState({
					url: url
				})
		}

	handleClick() {

			const requestOptions = {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({url: this.state.url})
				}

			fetch("http://localhost:8000/sp/api/v1/tokopedia/scraper", requestOptions)
			.then(response => response.json())
			/**.then(data => console.log(data)) **/
			.then(data => {
					if (data){
						this.setState({
							data: data,
							btn: true})
						} else {
						/* console.log("false gan !") */
						document.getElementById("url").value = "url tidak ditemukan !";
					}
				})
		}

	render(){	
		return(	
			<div className="row">
				<div className="col s12">
    				<div className="file-field input-field">
      					{this.state.btn?<div className="btn green z-depth-0"><span>upload</span></div>:<div className="btn z-depth-0" onClick={this.handleClick}>
							<span>scrape</span>
      					</div>}
      					<div className="file-path-wrapper">
        					<input id="url" name="url" onChange={this.handleChange} className="file-path validate" type="text" />
      					</div>
    				</div>
				</div>

				<div className="col s12">
				<h5>Products: { this.state.data.length }</h5>
				{ this.state.data.map(dt => <TokopediaScraperPost key={dt.product_id} product_name={dt.product_name} />)  }
				</div>
			</div>	
		)
	}
}

export default TokopediaScraper;
