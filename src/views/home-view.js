import { LitElement, html } from "lit-element";

class HomeView extends LitElement {
  render() {
    return html`
      <h1> Home view </h1>
      <a href="/users"> Go to Users </a>
    `;
  }
}

customElements.define('home-view', HomeView);