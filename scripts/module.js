import { getSetting, setupAPI } from "./helpers.js";
import { registerKeybindings, registerSettings } from "./settings.js";

Hooks.once("init", async function () {
  registerSettings();
  registerKeybindings();
  setupAPI();
});

Hooks.once("ready", async function () {
  Hooks.on("createChatMessage", async function (msg, _status, userid) {
    if (game.user.id !== userid) return;
    if (
      (
        message?.item?.system?.actionType?.value === "reaction"
        || message?.item?.system?.time?.value === "reaction"
      ) &&
      !msg?.flags?.pf2e?.context?.type &&
      getSetting("reaction.enabled")
    ) {
      const tokDoc = msg?.token || msg?.actor?.prototypeToken;
      const characterArt = tokDoc?.ring?.enabled
        ? tokDoc?.ring?.subject?.texture || tokDoc?.texture?.src
        : tokDoc?.texture?.src;
      game.objection.api.objection({ type: "objection", characterArt });
    }
  });
});
