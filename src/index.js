import './index.scss';
import { MainPage } from './pages/main.js';
import router from './router/router.js';

router.addUriListener();
class Main {
  constructor() {
    this.container = document.querySelector('#app');
    this.mainPage = new MainPage();
  }
  bootstrap() {
    this.container.append(this.mainPage.MainPage);
  }
}

const main = new Main();
main.bootstrap();
