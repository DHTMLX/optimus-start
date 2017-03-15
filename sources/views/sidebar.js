import {DHXView} from "dhx-optimus";

export class SidebarView extends DHXView{
	render(){
		this.ui = this.root.attachSidebar({
			template: "tiles",
			icons_path: "codebase/imgs/"
		});
		this.ui.attachEvent("onSelect", (id) => this.callEvent("SideBar", [id]) );
		this._load();
	}

	_load(){
		const struct = {
			items:[
				{
					id:"projects",
					text: "Projects",
					icon: "projects.png",
					selected: true
				},
				{
					id:"about",
					text: "About",
					icon: "settings.png"
				}
			]
		};

		this.ui.loadStruct(struct);
	}
	
}
