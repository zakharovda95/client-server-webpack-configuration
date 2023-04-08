import './index.scss';
import { MainPage } from './pages/main';
import { AuthRegistrationPage } from './pages/auth-registration';
import { AuthLoginPage } from './pages/auth-login';
import { MessengerPage } from './pages/messenger';

class Main {
  constructor() {
    this.container = document.querySelector('#app');
    this.loaction = window.location.pathname;

    this.mainPage = new MainPage();
    this.authRegistrationPage = new AuthRegistrationPage();
    this.authLoginPage = new AuthLoginPage();
    this.messengerPage = new MessengerPage();
  }

  bootstrap() {
    switch (this.loaction) {
      case '/':
        this.container.append(this.mainPage.Page);
        break;
      case '/auth/registration':
        this.container.append(this.authRegistrationPage.Page);
        break;
      case '/auth/login':
        this.container.append(this.authLoginPage.Page);
        break;
      case '/messenger':
        this.container.append(this.messengerPage.Page);
        break;
    }
  }
}

new Main().bootstrap();
