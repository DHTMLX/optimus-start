import {DHXView} from "dhx-optimus";

import {TopbarView} 	from "views/topbar.js";
import {SidebarView} 	from "views/sidebar.js";
import {AboutView} 		from "views/about.js";
import {ProjectsView} 	from "views/projects.js";

export class TopView extends DHXView{
	render(){
		this.ui = this.root.attachLayout("2U");

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