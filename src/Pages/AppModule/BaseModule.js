import React, { Fragment } from "react";
import TokopediaScreper from "./TokopediaScraper";

class BaseModul extends React.Component{
		render(){
			return(
				<Fragment>
					<TokopediaScreper />
				</Fragment>
			)
		}
	}

export default BaseModul;
