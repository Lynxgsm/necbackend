import { Elysia } from "elysia";
import { user } from "./mocks/user";
import { commands } from "./mocks/commands";
import { contracts } from "./mocks/contracts";
import { mtel } from "./mocks/mtel";
import { colissimo } from "./mocks/colissimo";
import { appointments, history } from "./mocks/appointments";
import { contractsPro } from "./mocks/pro/contracts";
import { configuration } from "./mocks/pro/configuration";

// MTEL - BOUTIQUE-PHOENIX,

let counter = 1;

const pause = (seconds: number): Promise<void> => {
  counter++;
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, (seconds + counter) * 1000);
  });
};

const app = new Elysia();
app.get("/userInfo", async () => user);
app.get("/commands", async () => {
  await pause(2);
  return commands;
});

app.get("/configuration", () => configuration);

app.get("/contracts", async () => {
  return contractsPro;
});
app.get("/error", ({ set }) => {
  set.status = 500;
  set.headers["x-powered-by"] = "Elysia";

  return "I'm teapod";
});

app.get("/appointments", async () => history);
app.get("/mtel", () => mtel);
app.get("/colissimo", () => colissimo);

app.listen(5500);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
