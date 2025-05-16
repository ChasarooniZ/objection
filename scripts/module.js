import { setupAPI } from "./helpers.js";
import { registerKeybindings, registerSettings } from "./settings.js";

Hooks.once("init", async function () {
  registerSettings();
  registerKeybindings();
  setupAPI();
});

Hooks.once("ready", async function () {});
