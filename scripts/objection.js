import { IMAGES, MODULE_ID, MS_TO_S } from "./const.js";
import {
  getCharacterArt,
  getCharacterFlip,
  getFlip,
  getOffset,
  getScale,
  getSetting,
} from "./helpers.js";

export function objection(cfg) {
  const config = {
    benchDuration: cfg?.benchDuration ?? getSetting("duration.bench"),
    wordDuration: cfg?.wordDuration ?? getSetting("duration.word"),
    characterArt: cfg?.characterArt ?? getCharacterArt(),
    flipArt: cfg?.flipArt ?? getCharacterFlip(),
    sfx: cfg?.sfx ?? getSetting("sfx"),
    volume: cfg?.volume ?? getSetting("volume"),
    offset: cfg?.offset ?? getOffset(),
    scale: cfg?.scale ?? getScale(),
    flipped: !!cfg?.flipped != getFlip(),
    type: cfg?.type ?? "objection",
  };

  const art = {
    char: getSetting("default-art"),
    objection: IMAGES.TEXT?.[config.type],
    bench: IMAGES.BENCH,
  };

  const duration = config.benchDuration * MS_TO_S;
  const objection = config.wordDuration * MS_TO_S;

  const loops = {
    objection: { values: [0, 3, 0], duration: 50, ease: "easeOutQuint" },
  };

  new Sequence({ name: MODULE_ID, softFail: true })
    //Objection
    .effect()
    .file(art.objection)
    .fadeIn(objection / 2, { ease: "easeOutQuint" })
    //.fadeOut(500, {ease: "easeOutQuint"})
    .spriteAnchor({ x: config.flipped ? 1 : 0, y: 1 })
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: config.flipped ? 1 : 0, y: 1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .loopProperty("sprite", "position.x", loops.objection)
    .loopProperty("sprite", "position.y", loops.objection)
    .scale(1.25 / 3)
    .duration(objection)
    .zIndex(4)

    //bench
    .effect()
    .file(art.bench)
    .spriteAnchor({ x: config.flipped ? 1 : 0, y: 1 })
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: config.flipped ? 1 : 0, y: 1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .scale(1 / 10)
    .mirrorX(config.flipped)
    .duration(duration + objection)
    //.delay(objection - 100)
    .zIndex(3)

    // Token
    .effect()
    .file(config.characterArt ?? art.char)
    .spriteAnchor({
      x:
        (config.flipped ? 1 : 0) +
        (config.flipped ? -config.offset.x : config.offset.x),
      y: 0.8 + config.offset.y,
    })
    .mirrorX(config.flipped !== config?.flipArt)
    .screenSpace()
    .screenSpaceAboveUI()
    .screenSpaceAnchor({ x: config.flipped ? 1 : 0, y: 1 })
    .screenSpaceScale({ fitY: true, ratioX: true })
    .scale(config.scale / 2)
    .duration(duration + objection)
    //.delay(objection - 100)
    .zIndex(2)

    //SFX
    .sound()
    .file(config.sfx)
    .volume(config.volume)

    .play({ preload: true });
}
