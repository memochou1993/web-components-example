export default class MyButtonShadow extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    });

    const button = document.createElement('button');
    button.innerHTML = 'My Shadow Button'; 

    const style = document.createElement('style');
    style.textContent = `
    button {
      background: white;
      border: 2px solid black;
      border-radius: 40px;
      font-size: 20px;
      display: inline-block;
      margin: 8px 0;
      padding: 24px;
      cursor: pointer;
    }
    button:hover {
      background: lightGrey;
    }`;

    this.shadowRoot.append(style, button);
  }
}
