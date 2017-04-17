import {DHXView} from "dhx-optimus";

declare function require(path: string): ( (data:any) => string );
var about = require("templates/about.html");

export class AboutView extends DHXView{
	render(){
		this.ui = this.root.attachHTMLString(about({
			name:"DHTMLX Optimus starter",
			author: "Stanislaw Wolski",
			version: "0.x"
		}));
	}
}
