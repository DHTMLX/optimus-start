import { DHXView } from 'dhx-optimus';

export class EventsView extends DHXView {
  render() {
    this.ui = this.root.attachHTMLString('<div class="work_in_progress">Events Dashboard</div>');
  }
}
