import { LitElement, html, css } from 'lit-element';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';
import { Router } from '@vaadin/router';

import './views/home-view';
import './views/users-view';
import './views/favourite-view';

export class MyPwa extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css``;
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById('outlet'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: 'users', component: 'users-view' },
      { path: 'favourite', component: 'favourite-view' },
    ]);
  }

  render() {
    return html`
      <mwc-top-app-bar-fixed>
          <mwc-icon-button icon="menu" slot="navigationIcon"></mwc-icon-button>
          <div slot="title">Title</div>
          <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button>
          <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
          <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button>
          <div>
            <div id="outlet"></div>
          </div>
      </mwc-top-app-bar-fixed>
    `;
  }
}
