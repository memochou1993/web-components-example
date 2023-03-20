export default class MyButtonTemplate extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: 'open'
    });

    const template = document.createElement('template');
    template.innerHTML = `
      <button>
        <div class="icon">
          <slot name="icon"></slot>
        </div>
        <slot name="text"></slot>
      </button>`;

    const style = document.createElement('style');
    style.textContent = `
      button {
        background: white;
        border: 2px solid black;
        border-radius: 40px;
        font-size: 20px;
        display: inline-flex;
        align-items: center;
        margin: 8px 0;
        padding: 24px;
        cursor: pointer;
      }
      button:hover {
        background: lightGrey;
      }
      .icon {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      ::slotted(img) {
        width: 100%;
        height: 100%;
      }`;

    this.shadowRoot.append(style, template.content.cloneNode(true));
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }

  handleClick() {
    window.alert('Hello');
  }
}
