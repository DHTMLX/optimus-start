import "less/app.less";

import {DHXApp} from "dhx-optimus";
import {TopView} from "views/top.js";


class MyApp extends DHXApp{
	constructor(config){
		super(config);
		this.attachEvent("ToolbarClick", (id) => dhtmlx.alert(id + " button was clicked"));
	}
	render(){
		this.show(TopView);
	}
}

window.MyApp = MyApp;