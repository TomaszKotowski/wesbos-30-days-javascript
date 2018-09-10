import { appendNavigation } from '../../index.js';
const title = `Playing with CSS Variables and JS`;
appendNavigation(title);
document.title = title;

/**
 * Exercise JS
 */

const inputs = document.querySelectorAll('.controls, input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
