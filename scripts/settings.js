import { MODULE_ID } from "./const.js";
import { isPF2e } from "./helpers.js";

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

  game.settings.register(MODULE_ID, `flip-hostile`, {
    name: game.i18n.localize(`${MODULE_ID}.module-settings.flip-hostile.name`),
    hint: game.i18n.localize(`${MODULE_ID}.module-settings.flip-hostile.hint`),
    scope: `world`,
    config: true,
    default: false,
    type: Boolean,
  });

  game.settings.register(MODULE_ID, `reaction.enabled`, {
    name: game.i18n.localize(`${MODULE_ID}.module-settings.reaction.enabled.name`),
    hint: game.i18n.localize(`${MODULE_ID}.module-settings.reaction.enabled.hint`),
    scope: `world`,
    config: isPF2e(),
    default: isPF2e(),
    type: Boolean,
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
    onDown: (context) => {
      if (context.isShift) {
        game.objection.api.objection({ type: "objection", flipped: true });
      } else {
        game.objection.api.objection({ type: "objection" });
      }
    },
    onUp: () => {},
    restricted: false, // Restrict this Keybinding to gamemaster only?
    reservedModifiers: ["Shift"], // On ALT, the notification is permanent instead of temporary
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
  });

  game.keybindings.register(MODULE_ID, "gotcha", {
    name: game.i18n.localize(`${MODULE_ID}.controls.gotcha.name`),
    hint: game.i18n.localize(`${MODULE_ID}.controls.gotcha.hint`),
    editable: [
      {
        key: "KeyG",
      },
    ],
    onDown: (context) => {
      if (context.isShift) {
        game.objection.api.objection({ type: "gotcha", flipped: true });
      } else {
        game.objection.api.objection({ type: "gotcha" });
      }
    },
    onUp: () => {},
    restricted: false, // Restrict this Keybinding to gamemaster only?
    reservedModifiers: ["Shift"], // On ALT, the notification is permanent instead of temporary
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
  });

  game.keybindings.register(MODULE_ID, "hold-it", {
    name: game.i18n.localize(`${MODULE_ID}.controls.hold-it.name`),
    hint: game.i18n.localize(`${MODULE_ID}.controls.hold-it.hint`),
    editable: [
      {
        key: "KeyH",
      },
    ],
    onDown: (context) => {
      if (context.isShift) {
        game.objection.api.objection({ type: "hold_it", flipped: true });
      } else {
        game.objection.api.objection({ type: "hold_it" });
      }
    },
    onUp: () => {},
    restricted: false, // Restrict this Keybinding to gamemaster only?
    reservedModifiers: ["Shift"], // On ALT, the notification is permanent instead of temporary
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
  });

  game.keybindings.register(MODULE_ID, "eureka", {
    name: game.i18n.localize(`${MODULE_ID}.controls.eureka.name`),
    hint: game.i18n.localize(`${MODULE_ID}.controls.eureka.hint`),
    editable: [],
    onDown: (context) => {
      if (context.isShift) {
        game.objection.api.objection({ type: "eureka", flipped: true });
      } else {
        game.objection.api.objection({ type: "eureka" });
      }
    },
    onUp: () => {},
    restricted: false, // Restrict this Keybinding to gamemaster only?
    reservedModifiers: ["Shift"], // On ALT, the notification is permanent instead of temporary
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
  });

  game.keybindings.register(MODULE_ID, "take-that", {
    name: game.i18n.localize(`${MODULE_ID}.controls.take-that.name`),
    hint: game.i18n.localize(`${MODULE_ID}.controls.take-that.hint`),
    editable: [],
    onDown: (context) => {
      if (context.isShift) {
        game.objection.api.objection({ type: "take_that", flipped: true });
      } else {
        game.objection.api.objection({ type: "take_that" });
      }
    },
    onUp: () => {},
    restricted: false, // Restrict this Keybinding to gamemaster only?
    reservedModifiers: ["Shift"], // On ALT, the notification is permanent instead of temporary
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
  });
}
