export function appendNavigation(title) {
  const indexDirection = '../../index.html';
  const navigation = `
  <div class="navigation">
    <nav class="navigation__bar">
    <a href="${indexDirection}" class="navigation__home">
      <button class="navigation__button">
        Go home
      </button>
    </a>
    </nav>
    <span class="navigation__title">${title}</span>
  </div>`;
  const navigationStyle = `
  <style>
    .navigation {
      display:flex;
      background-color: yellow;
      align-items:center;
    }
    .navigation__button:hover {
      cursor:pointer;
      background-color:dimgrey;
    }
    .navigation__button {
      height: 100%;
      padding: 10px;
      background: yellow;
      border: none;
      font-weight: bold;
      font-size: 16px;
      text-align: center;
      text-decoration: none;
      color: dodgerblue;
    }
    .navigation__title{
      flex: auto;
      color: dodgerblue;
      font-size:16px;
      transform: translateX(-44px)
    }
  </style>`;
  document.head.insertAdjacentHTML('beforeend', navigationStyle);
  document.body.insertAdjacentHTML('afterbegin', navigation);
}
