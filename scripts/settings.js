import { MODULE_ID } from "./const.js";

export function registerSettings() {
  // Register setting for enabling/disabling NPC activations
  game.settings.register(MODULE_ID, `sfx`, {
    name: game.i18n.localize(`${MODULE_ID}.module-settings.sfx.name`),
    hint: game.i18n.localize(`${MODULE_ID}.module-settings.sfx.hint`),
    scope: `world`,
    config: true,
    default: "modules/objection/assets/orchestra-hit.ogg",
    filePicker: "audio",
    type: String,
  });

  // Register setting for enabling/disabling NPC activations
  game.settings.register(MODULE_ID, `volume`, {
    name: game.i18n.localize(`${MODULE_ID}.module-settings.volume.name`),
    hint: game.i18n.localize(`${MODULE_ID}.module-settings.volume.hint`),
    scope: `world`,
    config: true,
    default: 0.75,
    type: Number,
  });

  game.settings.register(MODULE_ID, `duration.word`, {
    name: game.i18n.localize(`${MODULE_ID}.module-settings.duration.word.name`),
    hint: game.i18n.localize(`${MODULE_ID}.module-settings.duration.word.hint`),
    scope: `world`,
    config: true,
    default: 0.8,
    type: Number,
  });

  game.settings.register(MODULE_ID, `duration.bench`, {
    name: game.i18n.localize(
      `${MODULE_ID}.module-settings.duration.bench.name`
    ),
    hint: game.i18n.localize(
      `${MODULE_ID}.module-settings.duration.bench.hint`
    ),
    scope: `world`,
    config: true,
    default: 2,
    type: Number,
  });

  game.settings.register(MODULE_ID, `default-art`, {
    name: game.i18n.localize(
      `${MODULE_ID}.module-settings.default-art.enabled.name`
    ),
    hint: game.i18n.localize(
      `${MODULE_ID}.module-settings.default-art.enabled.hint`
    ),
    scope: `world`,
    config: false,
    default: `modules/objection/assets/chibi_ace-attorney.webp`,
    type: String,
  });
}

export function registerKeybindings() {
  game.keybindings.register(MODULE_ID, "objection", {
    name: game.i18n.localize(`${MODULE_ID}.controls.objection.name`),
    hint: game.i18n.localize(`${MODULE_ID}.controls.objection.hint`),
    editable: [
      {
        key: "KeyO",
      },
    ],
    onDown: () => {
      game.objection.api.objection();
    },
    onUp: () => {},
    restricted: false, // Restrict this Keybinding to gamemaster only?
    //reservedModifiers: ["Alt"],  // On ALT, the notification is permanent instead of temporary
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
  });
}
