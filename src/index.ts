import { Elysia } from 'elysia';
import { user } from './mocks/user';
import { commands } from './mocks/commands';
import { cors } from '@elysiajs/cors';
import { mtel } from './mocks/mtel';
import { colissimo } from './mocks/colissimo';
import { history } from './mocks/appointments';
import { configuration } from './mocks/pro/configuration';
import { contractsPro } from './mocks/pro/contracts';

// MTEL - BOUTIQUE-PHOENIX,

const pause = (seconds: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

const app = new Elysia();
app.use(cors());

app.get('/userInfo', async () => user);
app.get('/commands', async ({ set, cookie }) => {
  set.status = 206;
  // set.headers = {
  //   "Content"
  // }
  console.log(cookie);
  set.headers['x-powered-by'] = 'Elysia';
  return commands;
});

app.get('/configuration', () => configuration);

app.get('/contracts', async ({ set }) => {
  return contractsPro;
});

app.get('/error', ({ set }) => {
  set.status = 500;
  set.headers['x-powered-by'] = 'Elysia';

  return "I'm teapod";
});

app.get('/unauthorized', ({ set }) => {
  set.status = 401;
  set.headers['x-powered-by'] = 'Elysia';

  return "I'm teapod";
});

app.get('/appointments', async () => history);
app.get('/mtel', ({ set }) => {
  set.status = 206;
  console.log(mtel.data.products.length);
  return mtel;
});
app.get('/colissimo', () => colissimo);

app.listen(5500);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
