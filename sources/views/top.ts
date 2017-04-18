import {DHXView} from "dhx-optimus";

import {TopbarView} 	from "./topbar";
import {SidebarView} 	from "./sidebar";
import {AboutView} 		from "./about";
import {ProjectsView} 	from "./projects";

export class TopView extends DHXView{
	public ui:dhtmlXLayoutObject;

	render(){
		this.ui = this.root.attachLayout({ pattern: "2U" });

		this.show(TopbarView, this.ui);
		this.show(SidebarView, this.ui.cells("a"));

		this.ui.cells("a").setWidth(200);
		this.ui.forEachItem( cell =>{
			cell.hideHeader();
			cell.fixSize(true);
		});

		this.addSlot("right", this.ui.cells("b"));

		this.attachEvent("SideBar", (id) => {
			if (id === "projects")
				this.show(ProjectsView, "right");
			else if (id === "about")
				this.show(AboutView, "right");
		});

		this.show(ProjectsView, "right");
	}
}