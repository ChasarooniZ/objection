import { MODULE_ID } from "./const.js";
import { objection } from "./objection.js";

export function getSetting(setting) {
  return game.settings.get(MODULE_ID, setting);
}

export function getCharacterArt() {
  let tokDoc = canvas.tokens.controlled?.[0]?.document;
  let art = tokDoc?.ring?.subject?.texture
    ? tokDoc?.ring.art || tokDoc?.texture?.src
    : tokDoc?.texture?.src;

  if (art) return art;

  //Get Character if none
  tokDoc = game.user?.character?.prototypeToken;
  art = tokDoc?.ring?.subject?.texture
    ? tokDoc?.ring.art || tokDoc?.texture?.src
    : tokDoc?.texture?.src;
  if (art) return art;

  return game.user.avatar;
}

export function getOffset() {
  return { x: 0 / 100, y: 0 / 100 };
}

export function getScale() {
  return 1;
}

export function setupAPI() {
  game.objection = {
    api: {
      objection: objection,
    },
  };
}
