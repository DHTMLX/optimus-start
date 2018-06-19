import { DHXView } from 'dhx-optimus';

export class TopbarView extends DHXView {
  render() {
    this.ui = this.root.attachToolbar({
      iconset: 'awesome',
      skin: 'dhx_web'
    });
    this.ui.setIconSize(32);
    this.ui.attachEvent('onClick', (id) => this.callEvent('ToolbarClick', [id]));
    this._load();

    this.addService("ToolbarService", {
      setText: (text) => {
        this._setText(text);
      }
    })
  }

  _load() {
    let struct = [
      { id: 'title', type: 'text', text: '<span class="topbar_title">Contacts</span>' },
      { type: 'spacer' },
      { id: 'add', type: 'button', text: '', img: 'fa fa-plus-circle' }
    ];
    this.ui.loadStruct(struct);
  }

  _setText(text) {
    this.ui.setItemText('title', `<span class="topbar_title">${text}</span>`);
  }
}
