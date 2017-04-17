import {DHXView} from "dhx-optimus";

export class TopbarView extends DHXView{
	render(){
		this.ui = this.root.attachToolbar({
			iconset: "awesome",
			skin: "dhx_web"
		});
		this.ui.setIconSize(32);
		this.ui.attachEvent("onClick", (id:string) => this.callEvent("ToolbarClick", [id]))
		this._load();
	}

	_load(){
		let struct = [
			{id:"title",type:"text",text:"<span class='topbar_title'>Contacts</span>"},
			{type:"spacer"},
			{id:"add",type:"button",text:"",img:"fa fa-plus-circle"}
		];
		this.ui.loadStruct(struct);
	}
}