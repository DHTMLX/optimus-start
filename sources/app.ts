import "less/app.less";

import {DHXApp} from "dhx-optimus";
import {TopView} from "./views/top";

class MyApp extends DHXApp{
	constructor(config:any){
		super(config);
		this.attachEvent("ToolbarClick", (id:string) => alert(id + " button was clicked"));
	}
	render(){
		this.show(TopView);
	}
}

(<any>window).MyApp = MyApp;