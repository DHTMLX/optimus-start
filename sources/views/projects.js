import { DHXView } from 'dhx-optimus';

export class ProjectsView extends DHXView {
  render() {
    this.ui = this.root.attachHTMLString('<div class="work_in_progress">Project Dashboard</div>');
  }
}
