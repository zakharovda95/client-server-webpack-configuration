import './index.scss';
import { h } from './helpers/methods/h.method.js';

const app = document.querySelector('#app');

const elem = h(`<div class="text-[2rem]">Hello World</div>`);

app.append(elem);
