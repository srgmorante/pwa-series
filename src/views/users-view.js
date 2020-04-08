import { LitElement, html } from "lit-element";

import '@material/mwc-list/mwc-list-item';
import '@material/mwc-list/mwc-list';
import '@material/mwc-icon';

class UsersView extends LitElement {
  render() {
    return html`
      <h1> Users view </h1>
      <a href="/"> Go to Home</a>
      
      <mwc-list>
                <mwc-list-item graphic="avatar">
                    <span>avatar item</span>
                    <mwc-icon slot="graphic">person</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="avatar">
                    <span>avatar item</span>
                    <mwc-icon slot="graphic">person</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="avatar">
                    <span>avatar item</span>
                    <mwc-icon slot="graphic">person</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="avatar">
                    <span>avatar item</span>
                    <mwc-icon slot="graphic">person</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="avatar">
                    <span>avatar item</span>
                    <mwc-icon slot="graphic">person</mwc-icon>
                </mwc-list-item>
            </mwc-list>
    `;
  }
}

customElements.define('users-view', UsersView);
