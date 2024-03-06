import { Elysia } from 'elysia';
import { user } from './mocks/user';
import { commands } from './mocks/commands';
import { cors } from '@elysiajs/cors';
import { mtel } from './mocks/mtel';
import { colissimo } from './mocks/colissimo';
import { history } from './mocks/appointments';
import { configuration } from './mocks/pro/configuration';
import { contractsPro } from './mocks/pro/contracts';
import { detailContract } from './mocks/detail_contract';
import { detail_vrel } from './mocks/detail_vrel';
import { detailColis } from './mocks/detail_colis';
import { detail_cel } from './mocks/detail_cel';

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
app.get('/commands', async ({ set, query }) => {
  let response = commands.data;
  if (query) {
    const { offset, limit } = query;
    response = commands.data.slice(
      Number(offset),
      Number(offset) + Number(limit)
    );
    set.status = 206;
    set.headers = {
      'content-range': `${commands.data.length}`,
    };

    return { ...commands, data: response, count: response.length };
  }

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

app.get('/contracts/:id', () => {
  return detailContract;
});

app.get('/bufferize', () => {
  const buffered = '';
  return buffered;
});

app.get('/commands/detail/vrel/:id/:type', async () => {
  await pause(3);
  return detail_vrel;
});

app.get('/backoffice', () => {
  return {
    header: '(status, canal) => `Souscrit le ${status} à ${canal}`',
  };
});

app.get('/commands/detail/colis/:id/:type', async () => {
  return detailColis;
});

app.get('/commands/detail/cel/:id/:type', async () => {
  return detail_cel;
});

app.get('/unauthorized', ({ set }) => {
  set.status = 401;
  set.headers['x-powered-by'] = 'Elysia';

  return "I'm teapod";
});

app.get('/appointments', async () => history);
app.get('/commands/detail/mtel/Z000/0', ({ set }) => {
  set.status = 206;
  return mtel;
});
app.get('/colissimo', () => colissimo);

app.listen(5500);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
