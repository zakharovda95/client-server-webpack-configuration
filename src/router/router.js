import Router from 'vanilla-router';

const router = new Router({
  mode: 'history',
});

router.add('/', () => {
  console.log('Главная страница');
});

router.add('/auth/registration', () => {
  console.log('Страница регистрации');
});

router.add('/auth/login', () => {
  console.log('Страница входа');
});

router.add('/messenger', () => {
  console.log('Страница мессенджера');
});

export default router;
