import { DHXView } from 'dhx-optimus';

import { TopbarView } from 'views/topbar.js';
import { SidebarView } from 'views/sidebar.js';
import { AboutView } from 'views/about.js';
import { ProjectsView } from 'views/projects.js';

import route from 'riot-route';

route(function(collection, id, action) {
  console.log(collection, id, action);
});
route.start(true);

export class TopView extends DHXView {
  render() {
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
      console.log(`routing to ${id}`);
      switch (id) {
        case 'contacts':
          this.getService('ToolbarService').setText('Contacts');
          this.show(AboutView, 'right');
          route('/contacts');
          break;
        case 'projects':
          this.show(ProjectsView, 'right');
          this.getService('ToolbarService').setText('Projects');
          route('/projects');
          break;
        case 'events':
          this.getService('ToolbarService').setText('Events');
          this.show(AboutView, 'right');
          route('/events');
          break;
        case 'settings':
          this.getService('ToolbarService').setText('Settings');
          this.show(AboutView, 'right');
          route('/settings');
          break;
        case 'about':
          this.getService('ToolbarService').setText('About');
          this.show(AboutView, 'right');
          route('/about');
          break;
      }
    });

    this.show(ProjectsView, 'right');

  }
}
