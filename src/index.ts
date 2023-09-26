import { Elysia } from "elysia";
import { user } from "./mocks/user";
import { commands } from "./mocks/commands";
import { contracts } from "./mocks/contracts";

const pause = (seconds: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
};

const app = new Elysia();
app.get("/userInfo", async () => {
  await pause(3);
  return user;
});
app.get("/commands", () => commands);
app.get("/contracts", () => contracts);

app.listen(5500);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
