import { DHXView } from 'dhx-optimus';

import { TopbarView } from 'views/topbar.js';
import { SidebarView } from 'views/sidebar.js';
import { AboutView } from 'views/about.js';
import { ProjectsView } from 'views/projects.js';

import route from 'riot-route';

export class TopView extends DHXView {
  render() {
    //router
    let dhxTop = this;
    route(function (id) {
      dhxTop.getService('SidebarService').select(id || 'contacts');
      switch (id) {
        case 'contacts':
          dhxTop.getService('ToolbarService').setText('Contacts');
          dhxTop.show(AboutView, 'right');
          break;
        case 'projects':
          dhxTop.show(ProjectsView, 'right');
          dhxTop.getService('ToolbarService').setText('Projects');
          break;
        case 'events':
          dhxTop.getService('ToolbarService').setText('Events');
          dhxTop.show(AboutView, 'right');
          break;
        case 'settings':
          dhxTop.getService('ToolbarService').setText('Settings');
          dhxTop.show(AboutView, 'right');
          break;
        case 'about':
          dhxTop.getService('ToolbarService').setText('About');
          dhxTop.show(AboutView, 'right');
          break;
        default:
          dhxTop.getService('ToolbarService').setText('Contacts');
          dhxTop.show(AboutView, 'right');
          break;
      }
    });
    route.start(true);

    this.ui = this.root.attachLayout('2U');

    this.show(TopbarView, this.ui);
    this.show(SidebarView, this.ui.cells('a'));

    this.ui.cells('a').setWidth(200);
    this.ui.forEachItem(cell => {
      cell.hideHeader();
      cell.fixSize(true);
    });

    this.addSlot('right', this.ui.cells('b'));

    this.attachEvent('SideBar', (id) => {
      route(id);
    });

    this.show(ProjectsView, 'right');

  }
}
