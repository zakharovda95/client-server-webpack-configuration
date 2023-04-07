const path = require('path');
const dotenv = require('dotenv');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const currentEnv = path.resolve(`.env.${isDev ? 'development' : 'production'}`);

dotenv.config({
  path: currentEnv,
});

const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/api/test', (req, res) => {
  res.send('test');
});

if (isProd) {
  app.use(express.static('./'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
