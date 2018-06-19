import { DHXView } from 'dhx-optimus';

export class SidebarView extends DHXView {
  render() {
    dhtmlXSideBar.prototype.templates.faTiles =
      '<i><div class="dhxsidebar_item_icon #icon#"></div><div class="dhxsidebar_item_text">#text#</div></i>';
    this.ui = this.root.attachSidebar({
      template: 'faTiles'
    });
    this.ui.attachEvent('onSelect', (id) => this.callEvent('SideBar', [id]));
    this._load();

    this.addService('SidebarService', {
      select: (id) => {
        this._select(id);
      }
    });
  }

  _select(id) {
    this.ui.items(id).setActive();
  }

  _load() {
    const struct = {
      items: [
        {
          id: 'contacts',
          text: 'Contacts',
          icon: 'fa fa-user',
          selected: true
        },
        {
          id: 'projects',
          text: 'Projects',
          icon: 'fa fa-briefcase'
        },
        {
          id: 'events',
          text: 'Events',
          icon: 'fa fa-calendar-check'
        },
        {
          id: 'settings',
          text: 'Settings',
          icon: 'fa fa-cog'
        },
        {
          id: 'about',
          text: 'About',
          icon: 'fa fa-info'
        }
      ]
    };

    this.ui.loadStruct(struct);
  }

}
